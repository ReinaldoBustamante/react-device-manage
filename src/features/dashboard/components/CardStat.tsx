import { Card } from "../../../shared/components/Card"
import { statsIcons, statsName } from "../constants"

interface CardStatProps {
    label: string
    value: string
}

export const CardStat = ({ label, value }: CardStatProps) => {
    const Icon = statsIcons[label]
    return <Card className="flex items-center justify-between">
        <div>
            <span>{statsName[label]}</span>
            <p>{value}</p>
        </div>
        <Icon className="text-xl" />
    </Card>
}