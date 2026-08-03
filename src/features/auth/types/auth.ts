import type { z } from "zod";
import type { loginSchema } from "../schemas/auth";

export type LoginForm = z.infer<typeof loginSchema>