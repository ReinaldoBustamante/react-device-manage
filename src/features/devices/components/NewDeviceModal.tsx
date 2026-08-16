import { Modal } from "../../../shared/components/Modal"

export const NewDeviceModal = ({ closeModal }: { closeModal: () => void }) => {
    return <Modal title="Nuevo dispositivo" closeModal={closeModal}>
        <p>Contenido Añadir</p>
    </Modal>
}