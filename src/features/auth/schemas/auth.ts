import { z } from "zod"

export const loginSchema = z.object({
    username: z.email("Correo inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres")
})