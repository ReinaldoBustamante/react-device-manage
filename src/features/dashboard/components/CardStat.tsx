import { memo } from "react"
import { Card } from "../../../shared/components/Card"
import { statsIcons, statsName, statsColors } from "../constants"

interface CardStatProps {
    label: string
    value: number | string
}

export const CardStat = memo(({ label, value }: CardStatProps) => {
    const Icon = statsIcons[label as keyof typeof statsIcons]
    const iconColors = statsColors[label as keyof typeof statsColors]
    return <Card className="flex items-center justify-between">
        <div className="">
            <span className="text-md text-gray-500">{statsName[label as keyof typeof statsName]}</span>
            <p className="text-3xl font-semibold">{value}</p>
        </div>
        <div className={`${iconColors} px-2 py-2 rounded-md`}>
            <Icon className="text-3xl" />
        </div>
    </Card>
})