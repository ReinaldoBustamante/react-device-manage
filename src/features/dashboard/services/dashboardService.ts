import type { Stats } from "../types"



export const dashboardService = () => {
    const getDashboardStats = async () => {
        const response = await fetch(`http://18.230.198.130:8000/api/v1/dashboard/stats`)
        const data: Stats = await response.json()
        return data
    }

    return {
        getDashboardStats
    }
}