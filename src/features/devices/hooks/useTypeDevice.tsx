import { useQuery } from "@tanstack/react-query"
import { typeService } from "../services/typeService"

export const useTypeDevice = () => {

    const { data: typeDevicesResponse, isLoading: isLoadingTypeDevice } = useQuery({
        queryKey: ['typeDevices'],
        queryFn: () => typeService().getTypes()
    })

    return {
        typeDevicesResponse,
        isLoadingTypeDevice
    }
}