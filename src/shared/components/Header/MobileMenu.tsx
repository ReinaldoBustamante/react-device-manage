import { useState } from "react"
import { CiLogout, CiMenuBurger } from "react-icons/ci"
import { useAuthStore } from "../../../features/auth/store/auth"
import { IoMdClose } from "react-icons/io"
import { NavLinks } from "../NavLinks"
import { navLinks } from "../../constants"
import { Link } from "react-router"
import { useShallow } from "zustand/react/shallow"

export const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    const handleOpenMenu = () => {
        setIsMenuOpen(true)
    }
    const { isAuthenticated, logout } = useAuthStore(
        useShallow((state) => ({
            isAuthenticated: state.isAuthenticated,
            logout: state.logout
        }))
    )

    return <>
        <CiMenuBurger size={24} onClick={handleOpenMenu} className={`${!isAuthenticated && 'hidden'} md:hidden`} />
        <div className={`fixed inset-0 z-50 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} md:hidden`}>
            <div
                onClick={handleCloseMenu}
                className={`absolute inset-0 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? "opacity-40" : "opacity-0"}`}
            />
            <div
                className={`absolute top-0 left-0 w-[70%] h-full bg-white border-r border-r-gray-300 p-4
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-end">
                            <IoMdClose
                                onClick={handleCloseMenu}
                                size={24}
                                className="cursor-pointer"
                            />
                        </div>
                        <NavLinks links={navLinks} closeMenu={handleCloseMenu} className="flex flex-col gap-4 mt-6" />

                    </div>
                    <Link to={'/auth'} onClick={logout} className="px-4 py-2 border border-gray-100 rounded-md bg-white shadow-sm text-center flex gap-2 items-center justify-center">
                        <CiLogout size={20} />
                        <p>Cerrar Sesión</p>
                    </Link>
                </div>
            </div>
        </div>
    </>
}