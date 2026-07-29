import { Logo } from "./Logo"
import { Button } from "../Button"
import { CiLogin } from "react-icons/ci"
import { useNavigate } from "react-router"

export const Header = () => {
    const navigate = useNavigate()

    return <header className="w-full h-[7vh] px-12 border-b border-gray-200 flex justify-between items-center">
        <Logo />
        <Button text="Iniciar sesión" className="bg-blue-500 text-white" icon={CiLogin} onClick={() => navigate('/auth')} />
    </header>
}