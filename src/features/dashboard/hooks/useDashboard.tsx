import { useState, useEffect } from "react"
import { dashboardService } from "../services/dashboardService"

export const useDashboard = () => {
    const [dashboardData, setDashboardData] = useState()
    const [offset, setOffset] = useState(0)

    const loadData = async () => {
        const { getDashboardData } = dashboardService()
        const data = await getDashboardData(offset)
        setDashboardData(data)
    }

    const nextPage = () => {
        setOffset(offset + 10)
    }

    const prevPage = () => {
        setOffset(offset - 10)
    }

    useEffect(() => {
        loadData()
    }, [offset])

    return {
        dashboardData,
        nextPage,
        prevPage
    }
}