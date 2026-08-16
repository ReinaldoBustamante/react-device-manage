import { Modal } from "../../../shared/components/Modal"
import type { Device } from "../types"

interface AssignDeviceModalProps {
    closeModal: () => void,
    deviceSelected: Device 
}

export const AssignDeviceModal = ({ closeModal, deviceSelected }: AssignDeviceModalProps) => {
    console.log('asignar', deviceSelected)
    return <Modal title="Asignar dispositivo" closeModal={closeModal}>
        <p>contenido asignar</p>
    </Modal>
}