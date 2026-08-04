import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { deviceService } from "../services/deviceService"

export const useDevices = () => {
    const [offset, setOffset] = useState(0)
    const [search, setSearch] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState<string | null>(null)
    const [statusId, setStatusId] = useState<number | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearch(searchInput)
            setOffset(0)
        }, 500)
        return () => clearTimeout(timeout)
    }, [searchInput])

    const { data, isLoading: isLoadingDevices, isError: isErrorDevices, isFetching: isFetchingDevices } = useQuery({
        queryKey: ["devices", offset, search, statusId],
        queryFn: () => deviceService().getDevices(10, offset, search, statusId),
        staleTime: 5 * 1000 * 60,
        placeholderData: keepPreviousData
    })

    const handleStatusId = (id: number | null) => {
        setStatusId(id)
        setOffset(0)
    }

    const handleSearch = (value: string | null) => {
        setSearchInput(value)
    }

    const nextPage = () => {
        setOffset(offset + 10)
    }

    const prevPage = () => {
        setOffset(offset - 10)
    }

    return {
        data,
        isLoadingDevices,
        isErrorDevices,
        isFetchingDevices,
        handleSearch,
        handleStatusId,
        nextPage,
        prevPage
    }
}