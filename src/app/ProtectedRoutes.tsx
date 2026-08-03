import type { ReactNode } from "react"
import { useAuthStore } from "../features/auth/store/auth"
import { Navigate } from "react-router"

interface ProtectedRoutesProps {
    children: ReactNode
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    if (!isAuthenticated) return <Navigate to={"/auth"} replace />
    return children
}