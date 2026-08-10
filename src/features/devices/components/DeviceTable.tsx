
import { Table } from "../../../shared/components/Table"
import { TableSkeleton } from "../../../shared/components/TableSkeleton"
import { Select } from "../../../shared/components/Select"
import type { Device, DeviceResponse } from "../types"
import { TablePagination } from "../../../shared/components/TablePagination"
import { RowTable } from "./RowTable"
import { tableHeaders, tableSelectOptions } from "../constants"

interface DeviceTableProps {
    data: DeviceResponse | undefined,
    isLoadingDevices: boolean,
    isErrorDevices: boolean,
    showActions: boolean,
    handleSearch: (value: string | null) => void,
    handleStatusId: (id: number | null) => void,
    nextPage: () => void,
    prevPage: () => void
}

export const DeviceTable = ({
    data,
    isLoadingDevices,
    isErrorDevices,
    showActions,
    handleSearch,
    handleStatusId,
    nextPage,
    prevPage,
}: DeviceTableProps) => {
    const columns = showActions ? 8 : 7;
    const headers = showActions
        ? [...tableHeaders, "Acciones"]
        : tableHeaders;

    return <div className="px-4 py-6 border border-gray-300 rounded-md overflow-x-auto flex flex-col gap-4 bg-white">
        <div className="flex gap-2">
            <input type="text" className="px-4 py-2 border flex-6 rounded border-gray-300" placeholder="Buscar por marca, modelo o serie" onChange={(e) => handleSearch(e.target.value)} />
            <Select
                options={tableSelectOptions}
                onChange={handleStatusId}
            />
        </div>
        <Table headers={headers}>
            {isLoadingDevices && <TableSkeleton rows={10} columns={columns} />}
            {isErrorDevices && <tr><td colSpan={columns}>No se pudo conectar con el servidor</td></tr>}
            {data?.devices.length === 0 && <tr><td colSpan={columns} className="text-center py-4">No se encontraron dispositivos</td></tr>}
            {data?.devices.map((device) => <RowTable device={device} showActions={showActions} />)}
        </Table>
        <TablePagination pagination={data?.pagination} nextPage={nextPage} prevPage={prevPage} />
    </div>







}