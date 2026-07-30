export const dashboardService = () => {

    const getDashboardData = async (offset = 0, limit = 10) => {
        const response = await fetch(`http://52.67.227.152:8000/api/v1/devices/resume?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        return data
    }

    return {
        getDashboardData
    }
}