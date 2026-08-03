import { Logo } from "./Logo"
import { Button } from "../Button"
import { CiLogin } from "react-icons/ci"
import { useNavigate } from "react-router"
import { useAuthStore } from "../../../features/auth/store/auth"
import { Navbar } from "./Navbar"

export const Header = () => {
    const navigate = useNavigate()
    const { logout } = useAuthStore()
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return <header className="w-full h-[10vh] px-24 border-b border-[#D5E0E7] flex justify-between items-center bg-white">
        <div className="flex items-center gap-12">
            <Logo />
            <Navbar />
        </div>
        {
            isAuthenticated
                ? <Button text="Cerrar sesión" className="bg-white border border-gray-300 hover:bg-gray-50" icon={CiLogin} onClick={() => {
                    logout();
                    navigate('/auth')
                }} />
                : <Button text="Iniciar sesión" className="bg-[#0085B9] text-white hover:bg-[#0897cc]" icon={CiLogin} onClick={() => navigate('/auth')} />
        }
    </header>
}