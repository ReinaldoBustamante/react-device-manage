import { Modal } from "../../../shared/components/Modal"
import { Controller, useForm } from 'react-hook-form'
import { DeviceSchema, type CreateDeviceFormData } from "../schemas/Device"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../shared/components/Input"
import { Select } from "../../../shared/components/Select"


const options = [
    { value: 1, label: "Telefono" },
    { value: 2, label: "Notebook" },
    { value: 3, label: "Tablet" },
    { value: 4, label: "Monitor" },
    { value: 5, label: "Impresora" },
    { value: 6, label: "Escaner" },
    { value: 7, label: "Server" },
    { value: 8, label: "Redes" },
    { value: 9, label: "Otros" }
]


export const NewDeviceModal = ({ closeModal }: { closeModal: () => void }) => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<CreateDeviceFormData>({
        resolver: zodResolver(DeviceSchema),
        defaultValues: {
            type_id: 0,
            status_id: 1
        }
    })

    const onSubmit = (data: CreateDeviceFormData) => {
        console.log(data)
    }

    return <Modal title="Nuevo dispositivo" closeModal={closeModal}>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
            <div className="flex gap-2">
                <Input label="Modelo" placeholder="Modelo" {...register("model")} error={errors.model?.message} />
                <Input label="Marca" placeholder="brand" {...register("brand")} error={errors.brand?.message} />
            </div>
            <Input label="Numero de serie" placeholder="A0002XXXXAA2XXXX" {...register("serial_number")} error={errors.serial_number?.message} />
            <Input type="date" label="Fecha de compra" {...register("buy_date")} error={errors?.buy_date?.message}/>
            <Controller
                name="type_id"
                control={control}
                render={({ field }) => (
                    <Select
                        placeholder="Seleccione una opcion"
                        label="Tipo"
                        options={options}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.type_id?.message}
                    />
                )}
            />

            <div className="flex justify-end gap-2 mt-2">
                <button type="submit" className="px-2 py-1 w-24 border rounded-md border-gray-300 cursor-pointer">Crear</button>
                <button type="button" className="px-2 py-1 w-24 border rounded-md border-gray-300 cursor-pointer">Cancelar</button>
            </div>
        </form>
    </Modal>
}