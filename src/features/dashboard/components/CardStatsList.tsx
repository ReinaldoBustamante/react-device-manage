import { CardStat } from "./CardStat"


type stats = {
    assigned: number
    available: number
    in_repair: number
    losts: number
    retired: number
    total: number
}

export const CardStatsList = ({ stats }: { stats: stats }) => {

    const statsLabel = Object.keys(stats)

    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            statsLabel.map(label => <CardStat key={label} label={label} value={stats[label]} />)
        }
    </div>
}