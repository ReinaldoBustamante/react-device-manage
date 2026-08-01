import { Logo } from "./Logo"
import { Button } from "../Button"
import { CiLogin } from "react-icons/ci"
import { useNavigate } from "react-router"

export const Header = () => {
    const navigate = useNavigate()

    return <header className="w-full h-[10vh] px-24 border-b border-[#D5E0E7] flex justify-between items-center bg-white">
        <Logo />
        <Button text="Iniciar sesión" className="bg-[#0085B9] text-white hover:bg-[#0897cc]" icon={CiLogin} onClick={() => navigate('/auth')} />
    </header>
}