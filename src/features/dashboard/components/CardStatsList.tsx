import { statsName } from "../constants"
import { CardStat } from "./CardStat"

type stats = {
    assigned: number | string
    available: number | string
    in_repair: number | string
    losts: number | string
    retired: number | string
    total: number | string
}

export const CardStatsList = ({
    dashboardStats,
    isLoadingDashboardStats,
    isErrorDashboardStats
}: {
    dashboardStats: stats | null,
    isLoadingDashboardStats: boolean,
    isErrorDashboardStats: boolean
}) => {
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
            Object.keys(statsName).map(name => <CardStat key={name} label={name} value={dashboardStats[name]} />)
        }
    </div>


}