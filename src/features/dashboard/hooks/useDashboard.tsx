
import { dashboardService } from "../services/dashboardService"
import { useQuery } from "@tanstack/react-query"

export const useDashboard = () => {
    const { data: dashboardStats, isLoading: isLoadingDashboardStats, isError: isErrorDashboardStats } = useQuery({
        queryKey: ["dashboardStats"],
        queryFn: () => dashboardService().getDashboardStats(),
    })
    return {
        dashboardStats,
        isLoadingDashboardStats,
        isErrorDashboardStats
    }
}