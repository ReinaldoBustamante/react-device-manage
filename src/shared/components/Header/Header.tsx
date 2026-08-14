import { Logo } from "./Logo"
import { Link } from "react-router"
import { useAuthStore } from "../../../features/auth/store/auth"
import { NavLinks } from "../NavLinks"
import { layoutStyles, navLinks } from "../../constants"
import { MobileMenu } from "./MobileMenu"
import { CiLogin, CiLogout } from "react-icons/ci"
import { useShallow } from 'zustand/react/shallow';

export const Header = () => {
    const { isAuthenticated, logout } = useAuthStore(
        useShallow((state) => ({
            isAuthenticated: state.isAuthenticated,
            logout: state.logout
        }))
    );
    
    return <header className={`fixed w-full ${layoutStyles.headerHeight} border-b border-[#D5E0E7] flex items-center justify-between bg-white px-4 `}>
        <div className="flex gap-4 items-center">
            <Logo />
            {isAuthenticated && <NavLinks links={navLinks} className="hidden md:flex gap-2" />}
        </div>

        {
            isAuthenticated
                ? <Link to={'/auth'} onClick={logout} className="px-4 py-1.5 text-sm border border-gray-100 rounded-md bg-white font-semibold shadow-sm text-center hidden md:flex gap-2">
                    <CiLogout size={24} />
                    <p>Salir</p>
                </Link>
                : <Link to={'/auth'} className="px-4 py-1.5 text-sm border border-gray-100 rounded-md bg-white font-semibold shadow-sm text-center flex gap-2 items-center">
                    <CiLogin size={24} />
                    <p className="hidden md:inline">Ingresar</p>
                </Link>
        }
        <MobileMenu />
    </header>
}