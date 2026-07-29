import { Outlet } from "react-router"

export const AuthLayout = () => {
    return <div>

        <main>
            <Outlet />
        </main>
    </div>
}