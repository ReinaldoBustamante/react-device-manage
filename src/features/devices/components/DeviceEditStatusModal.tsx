import { useState } from "react"
import { Button } from "../../../shared/components/Button"
import { Modal } from "../../../shared/components/Modal"
import { Select } from "../../../shared/components/Select"
import { deviceStatus } from "../constants"
import type { Device } from "../types"
import { useAuthStore } from "../../auth/store/auth"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../../app/queryClient"

interface DeviceEditStatusModalProps {
    deviceSelected: Device | null
    handleCloseModal: () => void
}

export const DeviceEditStatusModal = ({ deviceSelected, handleCloseModal }: DeviceEditStatusModalProps) => {
    const [statusSelected, setStatusSelected] = useState<number>(deviceSelected?.status_id || 1)

    const statusOptions = Object.entries(deviceStatus).map(([key, value]) => ({
        value: Number(key),
        label: value
    }))

    const token = useAuthStore.getState().token;
    const updateDeviceStatus = (status_id: number) => axios.patch(`http://54.94.1.101:8000/api/v1/devices/${deviceSelected?.id}/status`, { status_id }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const { mutate: updateDeviceStatusMutation } = useMutation({
        mutationFn: (status_id: number) => updateDeviceStatus(status_id),
        onSuccess: () => {
            handleCloseModal()
            queryClient.invalidateQueries({
                queryKey: ["devices"]
            })
        },

    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateDeviceStatusMutation(statusSelected)
    }

    return <Modal open={Boolean(deviceSelected)} onClose={handleCloseModal} title="Editar estado del dispositivo">
        <form onSubmit={handleSubmit} action="">
            <Select
                label="Estado"
                value={deviceSelected?.status_id}
                onChange={(value) => setStatusSelected(value)}
                options={statusOptions}
            />

            <div className="flex gap-2 justify-end mt-2">
                <Button text="Cancelar" className="bg-white border border-gray-300" onClick={handleCloseModal} />
                <Button text="Guardar" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" type='submit' />
            </div>
        </form>
    </Modal>
}