import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import type { Pagination } from "../types"

interface PaginationProps {
    pagination: Pagination,
    onPrev: () => void,
    onNext: () => void
}

export const PaginationTable = ({ pagination = { total: 0, offset: 0, limit: 0 }, onNext, onPrev }: PaginationProps) => {
    const { total, offset, limit } = pagination
    const indiceInicial = offset 
    const indiceFinal = offset + limit
    return <div className="flex justify-center items-center flex-col gap-3 md:flex-row md:justify-between">
        <span className="text-md text-gray-600">Mostrando {indiceInicial}-{indiceFinal > total ? total : indiceFinal} de {total}</span>
        <div className="flex gap-4 items-center">
            <button type='button' className="px-2 py-1 border border-gray-100 rounded-md bg-white shadow-sm" onClick={onPrev}>
                <GrFormPrevious size={20} />
            </button>
            <span className="font-semibold text-md">Pagina 1 de 2</span>
            <button type='button' className="px-2 py-1 border border-gray-100 rounded-md bg-white shadow-sm" onClick={onNext}>
                <GrFormNext size={20} />
            </button>
        </div>
    </div>
}