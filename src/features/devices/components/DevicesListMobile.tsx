import { FiUserPlus } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { Card } from "../../../shared/components/Card";
import type { Device } from "../types";

interface DeviceListMobileProps {
    devices: Device[]
}

export const DeviceListMobile = ({ devices }: DeviceListMobileProps) => {
    return <div className="grid gap-2 md:grid-cols-2 lg:hidden">
        {
            devices.map(device => <Card className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-semibold">{device.model}</h2>
                        <p className="text-sm text-gray-500">{device.brand}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FiUserPlus size={20} />
                        <IoReload size={20} />
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Tipo</span>
                        <p className="text-sm text-gray-500">Notebook</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Serie</span>
                        <p className="text-sm text-gray-500">A3MMS2ASD2313S</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Estado</span>
                        <p className="text-sm text-gray-500">Asignado</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Asignado a</span>
                        <p className="text-sm text-gray-500">Reinaldo bustamante</p>
                    </div>
                </div>
            </Card>)
        }
    </div>
}