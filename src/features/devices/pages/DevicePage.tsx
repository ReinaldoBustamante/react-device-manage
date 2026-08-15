import { IoMdAdd } from "react-icons/io"
import { TitlePage } from "../../../shared/components/TitlePage"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"
import { DeviceListMobile } from "../components/DevicesListMobile";
import { PaginationTable } from "../../../shared/components/PaginationTable";
import { useDeviceQuery } from "../hooks/useDeviceQuery";

export const DevicePage = () => {
    usePageTitle("Devices - Device Management")
    
    const {devices, pagination, onPrev, onNext} = useDeviceQuery()

    return <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
            <button className="border self-end px-3 py-1.5 rounded-md border-gray-100 shadow-xs flex items-center gap-2 bg-white">
                <IoMdAdd size={18} />
                <span>Nuevo dispositivo</span>
            </button>
        </div>

        <DeviceListMobile devices={devices} />
        <PaginationTable pagination={pagination} onPrev={onPrev} onNext={onNext} />
    </div>
}