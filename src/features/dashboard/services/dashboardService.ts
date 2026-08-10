import type { Stats } from "../types"



export const dashboardService = () => {
    const getDashboardStats = async () => {
        const response = await fetch(`http://54.94.1.101:8000/api/v1/dashboard/stats`)
        const data: Stats = await response.json()
        return data
    }

    return {
        getDashboardStats
    }
}