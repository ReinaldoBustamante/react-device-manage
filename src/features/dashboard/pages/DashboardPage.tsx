import { TitlePage } from "../../../shared/components/TitlePage"
import { CardStatsList } from "../components/CardStatsList"
import { DeviceTable } from "../components/DeviceTable"
import { useDashboard } from "../hooks/useDashboard"
import { useDevices } from "../hooks/useDevices"

export const DashboardPage = () => {
    const { dashboardStats, isLoadingDashboardStats, isErrorDashboardStats } = useDashboard()
    const { devices, isLoadingDevices, isErrorDevices, handleSearch, handleStatusId, nextPage, prevPage } = useDevices()
    console.log(devices)
    return <div className="flex flex-col gap-8">
        <TitlePage title="Dashboard TI" description="Estado del inventario de dispositivos." />
        <CardStatsList
            dashboardStats={dashboardStats}
            isLoadingDashboardStats={isLoadingDashboardStats}
            isErrorDashboardStats={isErrorDashboardStats}
        />
        <DeviceTable
            data={devices}
            isLoadingDevices={isLoadingDevices}
            isErrorDevices={isErrorDevices}
            handleSearch={handleSearch}
            handleStatusId={handleStatusId}
            nextPage={nextPage}
            prevPage={prevPage}
        />


    </div>
}