
import { tableHeaders, tableSelectOptions } from "../constants"
import { Table } from "../../../shared/components/Table"
import { TableSkeleton } from "../../../shared/components/TableSkeleton"
import { Select } from "../../../shared/components/Select"
import type { DeviceResponse } from "../types"

interface DeviceTableProps {
    data: DeviceResponse | undefined,
    isLoadingDevices: boolean,
    isErrorDevices: boolean,
    handleSearch: (value: string | null) => void,
    handleStatusId: (id: number | null) => void,
    nextPage: () => void,
    prevPage: () => void
}

export const DeviceTable = ({
    data,
    isLoadingDevices,
    isErrorDevices,
    handleSearch,
    handleStatusId,
    nextPage,
    prevPage
}: DeviceTableProps) => {
    const pagination = data?.pagination;

    const offset = pagination?.offset ?? 0;
    const limit = pagination?.limit ?? 1;
    const total = pagination?.total ?? 0;

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

            {data?.devices.length === 0 && (
                <tr>
                    <td colSpan={7} className="text-center py-4">No se encontraron dispositivos</td>
                </tr>
            )}

            {
                data?.devices.map((device) => (
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
        <div className="flex justify-between items-center">
            <p>{total} resultados</p>
            <div className="flex gap-4 items-center">
                <button
                    onClick={prevPage}
                    disabled={offset === 0}
                    className="cursor-pointer"
                >
                    Previa
                </button>

                <span>
                    Página {Math.floor(offset / limit) + 1} de {Math.max(1, Math.ceil(total / limit))}
                </span>

                <button
                    onClick={nextPage}
                    disabled={offset + limit >= total}
                    className="cursor-pointer"
                >
                    Siguiente
                </button>
            </div>
        </div>
    </div>







}