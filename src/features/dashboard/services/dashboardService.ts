export const dashboardService = () => {

    const getDashboardData = async () => {
        const response = await fetch('http://52.67.227.152:8000/api/v1/devices/resume?limit=10&offset=0')
        const data = await response.json()
        return data
    }

    return {
        getDashboardData
    }
}