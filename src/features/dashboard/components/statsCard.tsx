import type { IconType } from "react-icons"
import { Card } from "../../../shared/components/Card"

interface StatsCardProps {
    label: string
    value: string
    icon: IconType
    iconColors: string
}

export const StatsCard = ({ label, value, icon: Icon, iconColors }: StatsCardProps) => {
    return <Card>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-gray-500">{label}</h1>
                <p className="text-2xl">{value}</p>
            </div>
            <div className={`p-4 rounded-md ${iconColors}`}>
                <Icon size={24} className="text-white" />
            </div>
        </div>
    </Card>
}