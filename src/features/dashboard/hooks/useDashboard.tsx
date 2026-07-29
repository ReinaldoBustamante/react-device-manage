import { useState, useEffect } from "react"
import { dashboardService } from "../services/dashboardService"

export const useDashboard = () => {
    const [dashboardData, setDashboardData] = useState()

    const loadData = async () => {
        const { getDashboardData } = dashboardService()
        const data = await getDashboardData()
        setDashboardData(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return {
        dashboardData
    }
}