import type { ReactNode } from "react"

interface CardProps {
    children: ReactNode,
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return <div className={`bg-white rounded-lg shadow-sm border border-[#E2E9EE] p-4 ${className}`}>
        {children}
    </div>
}