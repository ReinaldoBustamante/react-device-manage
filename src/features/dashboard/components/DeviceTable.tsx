
import { tableHeaders, tableSelectOptions } from "../constants"
import type { DevicePaginated } from "../types/Device"
import { Table } from "../../../shared/components/Table"
import { TableSkeleton } from "../../../shared/components/TableSkeleton"
import { Select } from "../../../shared/components/Select"

export const DeviceTable = ({
    devices,
    isLoadingDevices,
    isErrorDevices,
    handleSearch,
    handleStatusId,
    nextPage,
    prevPage
}: {
    devices: DevicePaginated,
    isLoadingDevices: boolean,
    isErrorDevices: boolean,
    handleSearch: (value: string | null) => void,
    handleStatusId: (id: number | null) => void,
    nextPage: () => void,
    prevPage: () => void
}) => {
    return <div className="px-4 py-6 border border-gray-300 rounded-md overflow-x-auto flex flex-col gap-4">
        <div className="flex gap-2">
            <input type="text" className="px-4 py-2 border flex-6 rounded border-gray-300" placeholder="Buscar" onChange={(e) => handleSearch(e.target.value)} />
            <Select
                options={tableSelectOptions}
                onChange={(e) => handleStatusId(Number(e.target.value))}
                className="flex-1 appearance-none rounded border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800"
            />
        </div>
        <Table headers={tableHeaders}>
            {isLoadingDevices && <TableSkeleton rows={10} columns={7} />}

            {isErrorDevices && (
                <tr>
                    <td colSpan={7}>No se pudo conectar con el servidor</td>
                </tr>
            )}

            {devices?.devices.length === 0 && (
                <tr>
                    <td colSpan={7} className="text-center py-4">No se encontraron dispositivos</td>
                </tr>
            )}

            {
                devices?.devices.map((device) => (
                    <tr key={device.id} className="border-b border-gray-200">
                        <td className="py-3 px-4">{device.brand}</td>
                        <td className="py-3 px-4">{device.model}</td>
                        <td className="py-3 px-4">{device.serial_number}</td>
                        <td className="py-3 px-4">{device.type_id}</td>
                        <td className="py-3 px-4">{device.status_id}</td>
                        <td className="py-3 px-4">{device.buy_date}</td>
                        <td className="py-3 px-4">{device.user_id || "Sin asignar"}</td>
                    </tr>
                ))
            }
        </Table>
        <div className="flex justify-between">
            <p>{devices?.pagination.total || 0} resultados</p>
            <div className="flex items-center gap-4">
                <button onClick={prevPage} disabled={devices?.pagination.offset === 0} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-2 py-1 rounded bg-gray-200">Previa</button>
                <span>Página {(devices?.pagination.offset / devices?.pagination.limit) + 1 || 1} de {Math.ceil(devices?.pagination.total / devices?.pagination.limit) || 1}</span>
                <button onClick={nextPage} disabled={devices?.pagination.offset + devices?.pagination.limit >= devices?.pagination.total} className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-2 py-1 rounded bg-gray-200">Siguiente</button>
            </div>
        </div>
    </div>







}