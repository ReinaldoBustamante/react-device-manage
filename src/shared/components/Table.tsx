interface TableProps {
    headers: string[]
    children: React.ReactNode
}

export const Table = ({ headers, children }: TableProps) => {
    return (
        <div className="border border-[#D5DFE7] rounded-md overflow-hidden overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-[#D5DFE7] bg-gray-100">
                        {headers.map(header => (
                            <th
                                key={header}
                                className="text-left py-3 px-4 font-semibold text-gray-800"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>{children}</tbody>
            </table>
        </div>
    )
}