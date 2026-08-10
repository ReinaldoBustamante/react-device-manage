import { useForm } from "react-hook-form"
import { Button } from "../../../shared/components/Button"
import { Input } from "../../../shared/components/Input"
import type { DeviceFormType } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { DeviceSchema } from "../schemas/device"
import { deviceTypeOptions } from "../constants"
import { Select } from "../../../shared/components/Select"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useAuthStore } from "../../auth/store/auth"
import { queryClient } from "../../../app/queryClient"
import { Modal } from "../../../shared/components/Modal"


interface DeviceCreateModalProps {
    handleCloseModal: () => void
    open: boolean
}

export const DeviceCreateModal = ({ handleCloseModal, open }: DeviceCreateModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DeviceFormType>({
        resolver: zodResolver(DeviceSchema)
    })
    const token = useAuthStore.getState().token;
    const createDevice = (data: DeviceFormType) => axios.post("http://54.94.1.101:8000/api/v1/devices", { ...data, status_id: 1 }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const { mutate: createDeviceMutation } = useMutation({
        mutationFn: (data: DeviceFormType) => createDevice(data),
        onSuccess: () => {
            handleCloseModal()
            queryClient.invalidateQueries({
                queryKey: ["devices"]
            })
        },

    })

    const onSubmit = (data: DeviceFormType) => {
        createDeviceMutation(data)
    }



    return <Modal title="Nuevo dispositivo" open={open} onClose={handleCloseModal}>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
                <Input label="Marca" register={register("brand")} placeholder="Ej. Apple" />
                <Input label="Modelo" register={register("model")} placeholder="Ej. MacBook Pro" />
            </div>
            <div className="flex gap-4">
                <Input label="Numero de serie" register={register("serial_number")} placeholder="Ej. SN123456789" />
                <Select label="Tipo" options={deviceTypeOptions} register={register("type_id", { valueAsNumber: true })} />

            </div>
            <div className="flex gap-4">
                <Input type="date" label="Fecha de compra" register={register("buy_date")} />
            </div>

            <div className="flex gap-2 justify-end mt-2">
                <Button text="Cancelar" className="bg-white border border-gray-300" onClick={handleCloseModal} />
                <Button text="Guardar" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" type='submit' />
            </div>

        </form>
    </Modal>
}