import { Select } from "../../../shared/components/Select"


const headers = ['Marca', 'Modelo', 'N° Serie', 'Tipo', 'Estado', 'Fecha de compra', 'Asignado a']
const tableSelectOptions = [
    { value: '', label: 'Todos los estados' },
    { value: '1', label: 'Activos' },
    { value: '2', label: 'Asignados' },
    { value: '3', label: 'En reparación' },
    { value: '4', label: 'Extraviados' },
    { value: '5', label: 'Retirados' },
]


export const DeviceTable = ({ devices, pagination, nextPage, prevPage }: any) => {



    return <div className="flex flex-col gap-4 p-6 border rounded-xl border-gray-300">
        <div className="flex gap-2">
            <input className="flex-8 border border-gray-300 rounded-lg px-4 py-2" type="text" placeholder="Buscar..." />
            <Select
                className="flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                options={tableSelectOptions}
            />

        </div>
        <div className="w-full border border-gray-300 rounded-xl overflow-hidden overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    {headers.map(header => <th key={header} className="text-left py-2 px-4 border-b border-gray-300 font-semibold">{header}</th>)}
                </thead>
                <tbody>
                    {
                        devices && devices.map((device) => (
                            <tr key={device.id}>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.brand}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.model}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.serial_number}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.type.name}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.status.name}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.buy_date}</td>
                                <td className="text-left py-2 px-4 border-b border-gray-300">{device.user?.name ?? 'Sin asignar'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="flex justify-between">
            <p>Mostrando {pagination?.offset + 1}-{pagination?.offset + pagination?.limit} de {pagination?.total}</p>
            <div className="flex gap-1">
                <button className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer" onClick={() => prevPage()}>Anterior</button>
                <p className="px-4 py-2">Página {(pagination?.offset / pagination?.limit) + 1} de {Math.ceil(pagination?.total / pagination?.limit)}</p>
                <button className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer" onClick={() => nextPage()}>Siguiente</button>
            </div>
        </div>
    </div>
}