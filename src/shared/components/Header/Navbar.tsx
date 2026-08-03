import { useAuthStore } from "../../../features/auth/store/auth";
import { NavItem } from "./NavItem";

export const Navbar = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return <div className="flex items-center">
        <ul className="list-none flex items-center gap-2">
            <NavItem to='/' text="Dashboard" />
            {
                isAuthenticated && <>
                    <NavItem to='/devices' text="Dispositivos" />
                    <NavItem to='/users' text="Usuarios" />
                    <NavItem to='/logs' text="Registros" />
                </>

            }
        </ul>
    </div>
}