import type { Device, ModalTypes } from "../types";
import { DeviceCard } from "./DeviceCard";

interface DeviceListMobileProps {
    devices: Device[]
    handleModal: (modal: ModalTypes, device: Device) => void
}

export const DeviceListMobile = ({ devices, handleModal }: DeviceListMobileProps) => {
    return <div className="grid gap-2 md:grid-cols-2 lg:hidden">
        {
            devices.map(device => <DeviceCard device={device} handleModal={handleModal} key={device.id}/>)
        }
    </div>
}