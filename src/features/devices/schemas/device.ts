import { z } from "zod"

export const DeviceSchema = z.object({
    brand: z.string().min(1, "La marca es requerida"),
    model: z.string().min(1, "El modelo es requerido"),
    serial_number: z.string().min(1, "El numero de serie es requerido"),
    type_id: z.number().min(1, "El tipo es requerido"),
    status_id: z.number().min(1, "El estado es requerido")
})