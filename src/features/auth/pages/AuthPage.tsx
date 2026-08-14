import { useEffect } from "react"
import type { AxiosError } from "axios"
import { Link, Navigate } from "react-router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast";

import { Logo } from "../../../shared/components/Header/Logo"
import { loginSchema } from "../schemas/auth"
import { authLogin } from "../services/authLogin"
import { useAuthStore } from "../store/auth"
import type { LoginForm } from "../types/auth"


export const AuthPage = () => {
    useEffect(() => {
        document.title = "Iniciar sesión - Device Management"
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const { login } = useAuthStore()
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const { mutate: loginMutation, isPending: isLogging } = useMutation({
        mutationFn: (data: LoginForm) => authLogin(data),
        onSuccess: (response) => {
            toast.success("Inicio de sesión exitoso");
            login(response.access_token)
        },
        onError: (error: AxiosError<{ detail: string }>) => {
            toast.error(`A ocurrido un error: "${error.response?.data?.detail}"`);
        },
    })

    const onSubmit = (data: LoginForm) => {
        loginMutation(data)

    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <div className="flex flex-col gap-6 items-center">
        <Logo />
        <div className="bg-white border border-gray-300 shadow-md px-8 py-6 rounded-md w-[500px] flex flex-col gap-1">
            <h1 className="font-semibold text-lg">Accede a tu cuenta</h1>
            <p className="text-gray-500 text-sm">Inicia sesión para administrar dispositivos y ver el historial de acciones.</p>
            <form className="flex flex-col mt-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" className="border border-gray-300 rounded-md px-2 py-1" {...register("username")} />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" className="border border-gray-300 rounded-md px-2 py-1" {...register("password")} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <button type="submit" disabled={isLogging} className="cursor-pointer bg-[#0085B9] text-white rounded-md px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0077A6] transition-colors duration-200 ease-in-out">
                    {isLogging ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
            </form>
        </div>
        <Link to={'/'} className="text-center text-sm text-gray-500 hover:text-gray-800">Volver al dashboard</Link>
    </div>
}