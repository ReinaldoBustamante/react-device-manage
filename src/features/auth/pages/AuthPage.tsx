import { Link } from "react-router"
import { Logo } from "../../../shared/components/Header/Logo"

export const AuthPage = () => {
    return <div className="flex flex-col gap-6 items-center">
        <Logo />
        <div className="bg-white border border-gray-300 shadow-md px-8 py-6 rounded-md w-[500px] flex flex-col gap-1">
            <h1 className="font-semibold text-lg">Accede a tu cuenta</h1>
            <p className="text-gray-500 text-sm">Inicia sesión para administrar dispositivos y ver el historial de acciones.</p>
            <form className="flex flex-col mt-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" className="border border-gray-300 rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" className="border border-gray-300 rounded-md px-2 py-1" />
                </div>
                <button type="submit" className="bg-[#0085B9] text-white rounded-md px-2 py-2 ">Iniciar sesión</button>
            </form>
        </div>
        <Link to={'/'} className="text-center text-sm text-gray-500 hover:text-gray-800">Volver al dashboard</Link>
    </div>
}