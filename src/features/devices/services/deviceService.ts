import type { DeviceResponse } from "../types"

export const deviceService = () => {
    const getDevices = async (limit: number, offset: number, search: string | null, status_id: number | null) => {
        let query = `limit=${limit}&offset=${offset}`
        if (search) query += `&search=${search}`
        if (status_id) query += `&status_id=${status_id}`
        const response = await fetch(`http://54.94.1.101:8000/api/v1/devices?${query}`)
        const data: DeviceResponse = await response.json()
        return data
    }

    return {
        getDevices
    }
}