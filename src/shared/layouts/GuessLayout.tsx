import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"

export const GuessLayout = () => {
    return <div>
        <Header />
        <main className="py-6 px-4">
            <Outlet />
        </main>
    </div>
}