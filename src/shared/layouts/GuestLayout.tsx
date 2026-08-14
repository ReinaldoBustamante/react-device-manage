import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { layoutStyles } from "../constants"

export const GuestLayout = () => {
    return <div className="h-screen overflow-auto ">
        <Header />
        <main className={`py-6 px-4 ${layoutStyles.contentOffset}`}>
            <Outlet />
        </main>
    </div>
}