import { Logo } from "./Logo"
import { Button } from "../Button"
import { CiLogin } from "react-icons/ci"
import { Link, useNavigate } from "react-router"
import { useAuthStore } from "../../../features/auth/store/auth"
import { Navbar } from "./Navbar"

export const Header = () => {
    const navigate = useNavigate()
    const { logout } = useAuthStore()
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return <header className="w-full h-[14vh] border-b border-[#D5E0E7] flex justify-between items-center bg-white px-4">
        <Logo />
        <Link to={'/auth'} className="px-4 py-2.5 bg-[#0085B9] text-white rounded-md ">
            <CiLogin size={24}/>
        </Link>
    </header>
}