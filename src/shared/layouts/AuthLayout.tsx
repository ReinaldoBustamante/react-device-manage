import { Outlet } from "react-router"

export const AuthLayout = () => {
    return <div className="bg-[#F9FCFF]">
        <main className="flex justify-center items-center h-screen">
            <Outlet />
        </main>
    </div>
}