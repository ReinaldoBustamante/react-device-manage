import type { TypeDeviceResponse } from "../types"

export const typeService = () => {
    const getTypes = async () => {
        const response = await fetch(`http://18.230.198.130:8000/api/v1/type_devices`)
        const data: TypeDeviceResponse = await response.json()
        return data
    }

    return {
        getTypes
    }
}