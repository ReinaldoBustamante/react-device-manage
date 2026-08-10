import { Button } from "../../../shared/components/Button"
import { TitlePage } from "../../../shared/components/TitlePage"
import { DeviceTable } from "../components/DeviceTable"
import { useDevices } from "../hooks/useDevices"
import { DeviceCreateModal } from "../components/DeviceCreateModal"
import { useDeviceModalStore } from "../store/useDeviceModalStore"
import { DeviceAssignModal } from "../components/DeviceAssignModal"
import { DeviceEditStatusModal } from "../components/DeviceEditStatusModal"



export const DevicePage = () => {
    const { data, nextPage, prevPage, isLoadingDevices, isErrorDevices, handleSearch, handleStatusId } = useDevices()
    const { openCreate, closeCreate, closeAssign, closeEditStatus, isCreateOpen, assignDevice, editStatusDevice } = useDeviceModalStore()


    return <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
            <Button
                text="Nuevo dispositivo"
                onClick={() => openCreate()}
                className="text-white bg-[#0085B9] hover:bg-[#0897cc]"
            />
        </div>

        <DeviceTable
            data={data}
            isLoadingDevices={isLoadingDevices}
            isErrorDevices={isErrorDevices}
            handleSearch={handleSearch}
            handleStatusId={handleStatusId}
            nextPage={nextPage}
            prevPage={prevPage}
            showActions={true}
        />

        {isCreateOpen && <DeviceCreateModal open={isCreateOpen} handleCloseModal={() => closeCreate()} />}
        {assignDevice && <DeviceAssignModal deviceSelected={assignDevice} handleCloseModal={() => closeAssign()} />}
        {editStatusDevice && <DeviceEditStatusModal deviceSelected={editStatusDevice} handleCloseModal={() => closeEditStatus()} />}


    </div>
}