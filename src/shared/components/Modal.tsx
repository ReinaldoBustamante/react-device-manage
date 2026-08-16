import type { ReactNode } from "react"
import { IoMdClose } from "react-icons/io"

export interface ModalProps {
    title: string,
    closeModal: () => void,
    children: ReactNode
}

export const Modal = ({ title, closeModal, children }: ModalProps) => {
    return <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-800/90" onClick={closeModal}></div>
        <div className="relative z-10 rounded-lg bg-white shadow-xl w-full m-4 md:w-[500px] flex flex-col ">
            <div className="flex justify-between px-4 py-3">
                <h1 className="text-lg font-semibold">{title}</h1>
                <button onClick={closeModal}>
                    <IoMdClose className="cursor-pointer"/>
                </button>
            </div>
            <div className="w-full border-b border-gray-100 shadow-sm"></div>
            <div className="px-4 py-3">
                {children}
            </div>
        </div>
    </div>
}
