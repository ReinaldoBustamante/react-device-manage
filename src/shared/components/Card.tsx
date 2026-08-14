import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode
}

export const Card = ({ children }: CardProps) => {
    return <div className="px-6 py-4 bg-white border rounded-md border-gray-300">
        {children}
    </div>
} 