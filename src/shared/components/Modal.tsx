import type { ReactNode } from "react"

export interface ModalProps {
    open: boolean
    onClose: () => void
    title: string
    children: ReactNode,
}

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70 z-40" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-[560px] relative z-50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}