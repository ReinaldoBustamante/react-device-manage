import { useQuery } from "@tanstack/react-query"
import { dashboardStats } from "../constant"
import { StatsCard } from "./statsCard"
import { getStats } from "../services/getStats"



export const StatsCards = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['stats'],
        queryFn: getStats,
    })

    return <div className="grid gap-4 md:grid-cols-2">
        {
            dashboardStats.map(stat => {
                const value = isLoading || isError || !data ? '-' : String(stat.accessor(data))
                return <StatsCard
                    key={stat.label}
                    label={stat.label}
                    value={value}
                    icon={stat.icon}
                    iconColors={stat.iconColors}
                />
            })
        }
    </div>      
}