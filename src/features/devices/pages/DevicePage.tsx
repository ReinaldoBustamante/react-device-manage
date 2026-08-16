import { IoMdAdd } from "react-icons/io"
import { TitlePage } from "../../../shared/components/TitlePage"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"
import { DeviceListMobile } from "../components/DevicesListMobile";
import { PaginationTable } from "../../../shared/components/PaginationTable";
import { useDeviceQuery } from "../hooks/useDeviceQuery";
import { useModal } from "../hooks/useModal";
import { NewDeviceModal } from "../components/NewDeviceModal";
import { AssignDeviceModal } from "../components/AssignDeviceModal";
import { UpdateDeviceModal } from "../components/UpdateDeviceModal";

export const DevicePage = () => {
    usePageTitle("Devices - Device Management")
    const { devices, pagination, onPrev, onNext } = useDeviceQuery()
    const {modal, deviceSelected, closeModal, handleModal} = useModal()
  

    return <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
            <button className="border self-end px-3 py-1.5 rounded-md border-gray-100 shadow-xs flex items-center gap-2 bg-white" onClick={() => handleModal("new")}>
                <IoMdAdd size={18} />
                <span>Nuevo dispositivo</span>
            </button>
        </div>

        <DeviceListMobile devices={devices} handleModal={handleModal} />
        <PaginationTable pagination={pagination} onPrev={onPrev} onNext={onNext} />

        {modal === 'new' && <NewDeviceModal closeModal={closeModal} />}
        {modal === 'assign' && deviceSelected && <AssignDeviceModal closeModal={closeModal} deviceSelected={deviceSelected}/>}
        {modal === 'update' && deviceSelected && <UpdateDeviceModal closeModal={closeModal} deviceSelected={deviceSelected}/>}
    </div>
}