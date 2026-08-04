import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import type { Pagination } from "../../features/dashboard/types"

interface TablePaginationProps {
    pagination: Pagination,
    nextPage: () => void,
    prevPage: () => void
}

export const TablePagination = ({ pagination, nextPage, prevPage }: TablePaginationProps) => {
    const offset = pagination?.offset ?? 0;
    const limit = pagination?.limit ?? 1;
    const total = pagination?.total ?? 0;


    return <div className="flex justify-between items-center py-1">
        <p className="text-gray-600 text-sm">Mostrando {offset + 1} - {offset + limit >= total ? total : offset + limit} de {total} resultados</p>
        <div className="flex gap-4 items-center">
            <button
                onClick={prevPage}
                disabled={offset === 0}
                className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 border rounded-md border-[#D5DFE7] shadow-md"
            >
                <GrFormPrevious className="text-xl text-gray-600" />
            </button>

            <span className="font-semibold text-sm">
                Página {Math.floor(offset / limit) + 1} de {Math.max(1, Math.ceil(total / limit))}
            </span>

            <button
                onClick={nextPage}
                disabled={offset + limit >= total}
                className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 border rounded-md border-[#D5DFE7] shadow-md"
            >
                <GrFormNext className="text-xl text-gray-600" />
            </button>
        </div>
    </div>
}