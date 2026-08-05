import { useForm } from "react-hook-form"
import { Button } from "../../../shared/components/Button"
import { Input } from "../../../shared/components/Input"
import { Select } from "../../../shared/components/Select"
import { tableSelectOptions } from "../constants"
import type { Device, DeviceFormType, TypeDeviceResponse } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { DeviceSchema } from "../schemas/device"

interface DeviceForm {
    typeDevicesResponse: TypeDeviceResponse
    isLoadingTypeDevice: boolean
    handleCloseModal: () => void
    defaultValues?: Device | null
}

export const DeviceForm = ({ typeDevicesResponse, isLoadingTypeDevice, handleCloseModal, defaultValues }: DeviceForm) => {


    const typeOptions = typeDevicesResponse.map(({ id, name }) => ({ value: id, label: name }))

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DeviceFormType>({
        resolver: zodResolver(DeviceSchema),
        defaultValues: {
            brand: defaultValues?.brand ?? "",
            model: defaultValues?.model ?? "",
            serial_number: defaultValues?.serial_number ?? "",
            type_id: defaultValues?.type_id ?? 0,
            status_id: defaultValues?.status_id ?? 0,
        }
    })

    const onSubmit = (data: DeviceFormType) => {
        console.log(data)
    }

    return <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
            <Input label="Marca" register={register("brand")} placeholder="Ej. Apple" />
            <Input label="Modelo" register={register("model")} placeholder="Ej. MacBook Pro" />
        </div>
        <div className="flex gap-4">
            <Input label="Numero de serie" register={register("serial_number")} placeholder="Ej. SN123456789" />
            <Input label="Tipo" register={register("type_id", { valueAsNumber: true })} placeholder="Ej. 1" />
        </div>
        <div className="flex gap-4">
            <Input label="Estado" register={register("status_id", { valueAsNumber: true })} placeholder="Ej. 1" />
        </div>

        <div className="flex gap-2 justify-end mt-2">
            <Button text="Cancelar" className="bg-white border border-gray-300" onClick={handleCloseModal} />
            <Button text="Guardar" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" type='submit' />
        </div>

    </form>
}