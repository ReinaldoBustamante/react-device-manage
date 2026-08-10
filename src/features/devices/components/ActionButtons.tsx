import type { Device } from "../types"
import { useDeviceModalStore } from "../store/useDeviceModalStore"
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuRefreshCw } from "react-icons/lu";
interface ActionButtonsProps {
    device: Device,
}

export const ActionButtons = ({ device }: ActionButtonsProps) => {
    const { openAssign, openEditStatus } = useDeviceModalStore()


    return <td className="py-3 px-4 text-gray-700">
        <div className="flex gap-3">
            <AiOutlineUserAdd title="Asignar usuario" className="text-xl text-gray-700 cursor-pointer" onClick={() => openAssign(device)} />
            <LuRefreshCw title="Cambiar estado" className="text-xl text-gray-700 cursor-pointer" onClick={() => openEditStatus(device)} />
        </div>
    </td>
}