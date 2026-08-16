import { httpClient } from "../../../app/httpClient"


export const getDevice = async (pageSize: number, offset: number) => {
    const response = await httpClient.get(`/devices/?limit=${pageSize}&offset=${offset}`)
    return response.data
}