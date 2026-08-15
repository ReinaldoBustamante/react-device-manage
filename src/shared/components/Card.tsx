import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return <div className={`${className} px-6 py-4 bg-white border rounded-md border-gray-100 shadow-xs`}>
        {children}
    </div>
} 