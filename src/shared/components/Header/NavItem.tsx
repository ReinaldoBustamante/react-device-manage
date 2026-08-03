import { NavLink } from "react-router"

export const NavItem = ({ text, to }: { text: string, to: string }) => {
    return <NavLink
        to={to}
        className={({ isActive }) =>
            isActive
                ? "text-gray-900 px-4 py-2 bg-[#ECF3F8] rounded-md"
                : "text-gray-500 px-4 py-2 hover:bg-[#ECF3F8] hover:text-gray-900 rounded-md"
        }
    >{text}</NavLink>
}