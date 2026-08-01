import { Card } from "../../../shared/components/Card"
import { statsIcons, statsName } from "../constants"

interface CardStatProps {
    label: string
    value: number | string
}

export const CardStat = ({ label, value }: CardStatProps) => {
    const Icon = statsIcons[label as keyof typeof statsIcons]
    return <Card className="flex items-center justify-between">
        <div>
            <span>{statsName[label as keyof typeof statsName]}</span>
            <p>{value}</p>
        </div>
        <Icon className="text-xl" />
    </Card>
}