import { FiUserPlus } from "react-icons/fi"
import type { Device, ModalTypes } from "../types"
import { IoReload } from "react-icons/io5"
import { Card } from "../../../shared/components/Card"

interface DeviceCardProps {
    device: Device
    handleModal: (modal: ModalTypes, device: Device) => void
}

export const DeviceCard = ({device, handleModal}: DeviceCardProps) => {
    const { model, brand, type_id, serial_number, status_id, user_id } = device
    return <Card className="flex flex-col gap-4">
        <div className="flex justify-between">
            <div>
                <h2 className="font-semibold">{model}</h2>
                <p className="text-sm text-gray-500">{brand}</p>
            </div>
            <div className="flex items-center gap-4">
                <FiUserPlus size={20} onClick={() => handleModal("assign", device)} />
                <IoReload size={20} onClick={() => handleModal("update", device)} />
            </div>
        </div>
        <div className="grid grid-cols-1">
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Tipo</span>
                <p className="text-sm text-gray-500">{type_id}</p>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Serie</span>
                <p className="text-sm text-gray-500">{serial_number}</p>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Estado</span>
                <p className="text-sm text-gray-500">{status_id}</p>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Asignado a</span>
                <p className="text-sm text-gray-500">{user_id ?? 'Sin asignar'}</p>
            </div>
        </div>
    </Card>
}