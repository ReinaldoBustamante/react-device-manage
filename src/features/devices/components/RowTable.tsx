import { deviceStatus, deviceType, statusColor } from "../constants"
import type { Device } from "../types"
import { ActionButtons } from "./ActionButtons"

export interface RowTableProps {
    device: Device,
    showActions: boolean,
    onEdit?: (device: Device) => void
}

export const RowTable = ({ device, showActions, onEdit }: RowTableProps) => {
    return <tr key={device.id} className="border-b border-gray-200">
        <td className="py-3 px-4 text-gray-700">{device.brand}</td>
        <td className="py-3 px-4 text-gray-700">{device.model}</td>
        <td className="py-3 px-4 text-gray-700">{device.serial_number}</td>
        <td className="py-3 px-4 text-gray-700">{deviceType[device.type_id as keyof typeof deviceType]}</td>
        <td className="py-3 px-4 text-gray-700">
            <span className={`font-semibold px-3 text-sm py-1 rounded-full inline ${statusColor[device.status_id as keyof typeof statusColor]}`}>
                {deviceStatus[device.status_id as keyof typeof deviceStatus]}
            </span>
        </td>
        <td className="py-3 px-4 text-gray-700">{device.buy_date}</td>
        <td className="py-3 px-4 text-gray-700">{device.user_id || "Sin asignar"}</td>
        {showActions && <ActionButtons onEdit={() => onEdit?.(device)} />}
    </tr>
}