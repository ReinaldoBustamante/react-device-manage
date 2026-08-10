import { z } from "zod"

export const DeviceSchema = z.object({
    brand: z.string().min(1, "La marca es requerida"),
    model: z.string().min(1, "El modelo es requerido"),
    serial_number: z.string().min(1, "El numero de serie es requerido"),
    type_id: z.number().min(1, "El tipo es requerido"),
    buy_date: z
        .string()
        .transform((value) => `${value}T00:00:00.000Z`)
        .pipe(z.iso.datetime())
})