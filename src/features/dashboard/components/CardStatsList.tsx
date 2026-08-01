import { statsName } from "../constants"
import { CardStat } from "./CardStat"
import type { Stats } from "../types"


interface CardStatsListProps {
    dashboardStats: Stats | undefined,
    isLoadingDashboardStats: boolean,
    isErrorDashboardStats: boolean
}

export const CardStatsList = ({ dashboardStats, isLoadingDashboardStats, isErrorDashboardStats }: CardStatsListProps) => {

    if (isLoadingDashboardStats) return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            Object.keys(statsName).map(name => <CardStat key={name} label={name} value={"-"} />)
        }
    </div>

    if (isErrorDashboardStats) return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            Object.keys(statsName).map(name => <CardStat key={name} label={name} value={"-"} />)
        }
    </div>

    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            dashboardStats && Object.keys(statsName).map(name => <CardStat key={name} label={name} value={dashboardStats[name as keyof Stats]} />)
        }
    </div>


}