import { TitlePage } from "../../../shared/components/TitlePage"
import { DeviceTable } from "../../devices/components/DeviceTable"
import { useDashboard } from "../hooks/useDashboard"
import { useDevices } from "../../devices/hooks/useDevices"
import { CardStatsList } from "../components/CardStatsList"

export const DashboardPage = () => {
    const { dashboardStats, isLoadingDashboardStats, isErrorDashboardStats } = useDashboard()
    const { data, isLoadingDevices, isErrorDevices, handleSearch, handleStatusId, nextPage, prevPage } = useDevices()
    return <div className="flex flex-col gap-8">
        <TitlePage title="Dashboard TI" description="Estado del inventario de dispositivos." />
        <CardStatsList
            dashboardStats={dashboardStats}
            isLoadingDashboardStats={isLoadingDashboardStats}
            isErrorDashboardStats={isErrorDashboardStats}
        />
        <DeviceTable
            showActions={false}
            data={data}
            isLoadingDevices={isLoadingDevices}
            isErrorDevices={isErrorDevices}
            handleSearch={handleSearch}
            handleStatusId={handleStatusId}
            nextPage={nextPage}
            prevPage={prevPage}
        />


    </div>
}