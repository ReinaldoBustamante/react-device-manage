import { Button } from "../../../shared/components/Button"
import { TitlePage } from "../../../shared/components/TitlePage"
import { DeviceTable } from "../components/DeviceTable"
import { useDevices } from "../hooks/useDevices"
import { Modal } from "../../../shared/components/Modal"
import { useModal } from "../../../shared/hooks/useModal"
import { useState } from "react"
import type { Device } from "../types"


export const DevicePage = () => {
    const { data, nextPage, prevPage, isLoadingDevices, isErrorDevices, handleSearch, handleStatusId } = useDevices()
    const { isOpen, handleOpenModal, handleCloseModal } = useModal()
    const [modalType, setModalType] = useState<"create" | "edit">("create")

    const handleCreate = () => {
        setModalType("create")
        handleOpenModal()
    }

    const handleEdit = (device: Device) => {
        setModalType("edit")
        console.log(device)
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
                    ? <p>Formulario para crear dispositivo</p>
                    : <p>Formulario para editar dispositivo</p>
            }
        </Modal>
    </div>
}