
import { TitlePage } from "../../../shared/components/TitlePage"
import { StatsCards } from "../components/statsCards"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"

export const DashboardPage = () => {
    usePageTitle("Dashboard - Device Management")

    return <div className="flex flex-col gap-8">
        <TitlePage title="Dashboard TI" description="Estado del inventario de dispositivos." />
        <StatsCards />
    </div>
}