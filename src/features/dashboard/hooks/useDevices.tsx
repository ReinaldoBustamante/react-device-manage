import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { dashboardService } from "../services/dashboardService"
import { useState } from "react"

export const useDevices = () => {
    const [offset, setOffset] = useState(0)
    const [search, setSearch] = useState<string | null>(null)
    const [statusId, setStatusId] = useState<number | null>(null)


    const { data: devices, isLoading: isLoadingDevices, isError: isErrorDevices } = useQuery({
        queryKey: ["dashboardDevices", offset, search, statusId],
        queryFn: () => dashboardService().getDashboardDevices(10, offset, search, statusId),
        staleTime: 5 * 1000 * 60,
        placeholderData: keepPreviousData
    })


    const handleStatusId = (id: number | null) => {
        setStatusId(id)
        setOffset(0)
    }

    const handleSearch = (value: string | null) => {
        setSearch(value)
        setOffset(0)
    }

    const nextPage = () => {
        setOffset(offset + 10)
    }

    const prevPage = () => {
        setOffset(offset - 10)
    }

    return {
        devices,
        isLoadingDevices,
        isErrorDevices,
        handleSearch,
        handleStatusId,
        nextPage,
        prevPage
    }
}