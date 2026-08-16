import { Modal } from "../../../shared/components/Modal"
import type { Device } from "../types"

interface UpdateDeviceModalProps {
    closeModal: () => void,
    deviceSelected: Device 
}


export const UpdateDeviceModal = ({ closeModal, deviceSelected }: UpdateDeviceModalProps) => {
    console.log('update', deviceSelected)
    return <Modal title="Actualizar dispositivo" closeModal={closeModal}>
        <p>contenido actualizar</p>
    </Modal>
}