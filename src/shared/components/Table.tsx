interface TableProps {
    headers: string[]
    children: React.ReactNode
}

export const Table = ({ headers, children }: TableProps) => {
    return (
        <div className="px-4 py-6 border border-gray-300 rounded-md overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-300 bg-gray-100">
                        {
                            headers.map(header => (
                                <th
                                    key={header}
                                    className="text-left py-3 px-4 font-semibold"
                                >
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}