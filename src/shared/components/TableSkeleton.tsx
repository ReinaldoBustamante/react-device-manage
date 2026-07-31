interface TableSkeletonProps {
    rows: number
    columns: number
}

export const TableSkeleton = ({ rows, columns }: TableSkeletonProps) => {
    return <>
        {
            Array.from({ length: rows }).map((_, rowIndex) => (
                <tr
                    key={rowIndex}
                    className="border-b border-gray-200"
                >
                    {
                        Array.from({ length: columns }).map((_, colIndex) => (
                            <td
                                key={colIndex}
                                className="py-3 px-4"
                            >
                                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                            </td>
                        ))
                    }
                </tr>
            ))
        }
    </>
}