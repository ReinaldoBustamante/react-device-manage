import { TitlePage } from "../../../shared/components/TitlePage"
import { CardStatsList } from "../components/CardStatsList"
import { useDashboard } from "../hooks/useDashboard"

export const DashboardPage = () => {
    const { dashboardData } = useDashboard()
    const { devices, stats, pagination } = dashboardData || { devices: null, stats: null, pagination: null }

    console.log(devices)
    console.log(pagination)

    return <div className="flex flex-col gap-6">
        <TitlePage title="Dashboard TI" description="Estado del inventario de dispositivos." />
        {
            stats ? <CardStatsList stats={stats} /> : <span>Loading...</span>
        }
    </div>
}