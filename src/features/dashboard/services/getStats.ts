import { httpClient } from "../../../app/httpClient"
import type { Stats } from "../types"

export const getStats = async () => {
    const response = await httpClient.get<Stats>('/dashboard/stats')
    return response.data
}