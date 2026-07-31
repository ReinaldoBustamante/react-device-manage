export const dashboardService = () => {

    const getDashboardStats = async () => {
        const response = await fetch(`http://18.230.198.130:8000/api/v1/dashboard/stats`)
        const data = await response.json()
        return data
    }

    const getDashboardDevices = async (limit: number, offset: number, search: string | null, status_id: number | null) => {
        let query = `limit=${limit}&offset=${offset}`
        if (search) query += `&search=${search}`
        if (status_id) query += `&status_id=${status_id}`
        const response = await fetch(`http://18.230.198.130:8000/api/v1/dashboard/devices?${query}`)
        const data = await response.json()
        return data
    }

    return {
        getDashboardStats,
        getDashboardDevices
    }
}