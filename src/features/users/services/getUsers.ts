import { httpClient } from "../../../app/httpClient"

export const getUsers = async (search: string) => {
    const response = await httpClient.get(`/users/?offset=0&limit=5&search=${search}`)
    return response.data
}