import { useState } from "react"
import type { Device, ModalTypes } from "../types"

export const useModal = () => {
    const [modal, setModal] = useState<ModalTypes | null>(null)
    const [deviceSelected, setDeviceSelected] = useState<Device | null>(null)

    const handleModal = (modal: ModalTypes, device?: Device) => {
        setModal(modal)
        if(device) setDeviceSelected(device)
    }

    const closeModal = () => {
        setModal(null)
        setDeviceSelected(null)
    }

    return {
        modal,
        deviceSelected,
        handleModal,
        closeModal
    }
}