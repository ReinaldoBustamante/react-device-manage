import { Button } from "../../../shared/components/Button"
import { TitlePage } from "../../../shared/components/TitlePage"
import { DeviceTable } from "../components/DeviceTable"
import { useDevices } from "../hooks/useDevices"
import { Modal } from "../../../shared/components/Modal"
import { useModal } from "../../../shared/hooks/useModal"
import { useState } from "react"
import type { Device } from "../types"
import { useTypeDevice } from "../hooks/useTypeDevice"
import { DeviceForm } from "../components/DeviceForm"


export const DevicePage = () => {
    const { data, nextPage, prevPage, isLoadingDevices, isErrorDevices, handleSearch, handleStatusId } = useDevices()
    const { typeDevicesResponse, isLoadingTypeDevice } = useTypeDevice()
    const { isOpen, handleOpenModal, handleCloseModal } = useModal()
    const [modalType, setModalType] = useState<"create" | "edit">("create")
    const [deviceSelected, setDeviceSelected] = useState<Device | null>(null)

    const handleCreate = () => {
        setModalType("create")
        handleOpenModal()
    }

    const handleEdit = (device: Device) => {
        setModalType("edit")
        setDeviceSelected(device)
        handleOpenModal()
    }

    const title = modalType === "create" ? "Crear dispositivo" : "Editar dispositivo"

    return <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
            <Button text="Nuevo dispositivo" onClick={handleCreate} className="text-white bg-[#0085B9] hover:bg-[#0897cc]" />
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
            onEdit={handleEdit}
        />

        <Modal open={isOpen} onClose={handleCloseModal} title={title}>
            {
                modalType === "create"
                    ? <DeviceForm
                        typeDevicesResponse={typeDevicesResponse}
                        isLoadingTypeDevice={isLoadingTypeDevice}
                        handleCloseModal={handleCloseModal}
                    />
                    : <DeviceForm
                        typeDevicesResponse={typeDevicesResponse}
                        isLoadingTypeDevice={isLoadingTypeDevice}
                        handleCloseModal={handleCloseModal}
                        defaultValues={deviceSelected}
                    />
            }
        </Modal>
    </div>
}