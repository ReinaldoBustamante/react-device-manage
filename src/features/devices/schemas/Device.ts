import { z } from "zod";

export const DeviceSchema = z.object({
    brand: z.string().min(2, "La marca debe tener 2 o mas caracteres"),
    model: z.string().min(2, "El modelo debe tener 2 o mas caracteres"),
    serial_number: z.string().min(1, "Requerido"),
    type_id: z.number().min(1, "Requerido"),
    buy_date: z.string().min(1, "Requerido"),
    status_id: z.number()
});

export type CreateDeviceFormData = z.infer<typeof DeviceSchema>