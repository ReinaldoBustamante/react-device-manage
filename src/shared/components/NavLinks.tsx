import type { IconType } from "react-icons"
import { NavLink } from "react-router"

interface NavLinksProps {
    links: { to: string, label: string, icon: IconType }[]
    closeMenu?: () => void
    className?: string
}

export const NavLinks = ({ className, links, closeMenu }: NavLinksProps) => {

    return <ul className={`${className} `}>

            {
                links.map(({ to, label, icon: Icon }) => {
                    return <NavLink
                        to={to}
                        key={to}
                        end={to === '/'}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            `px-3 py-2 cursor-pointer rounded-md text-gray-500 ${isActive
                                ? "bg-[#ECF3F8] text-gray-900"
                                : "hover:bg-[#ECF3F8]"
                            }`
                        }
                    >
                        <div className="flex items-center gap-1">
                            <Icon />
                            <p className="text-sm">{label}</p>
                        </div>
                    </NavLink>
                })
            }
    </ul>
}