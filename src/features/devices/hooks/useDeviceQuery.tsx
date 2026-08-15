import { useState } from "react"
import type { Pagination } from "../../../shared/types"
import { httpClient } from "../../../app/httpClient"
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery"
import { useQuery } from "@tanstack/react-query"
import type { Device } from "../types"

export const useDeviceQuery = () => {
    const [offset, setOffset] = useState(0)
    const isMobile = useMediaQuery("(max-width: 767px)");
    const pageSize = isMobile ? 5 : 10;

    const { data } = useQuery<{ devices: Device[], pagination: Pagination }>({
        queryKey: ['devices', pageSize, offset],
        queryFn: async () => {
            const response = await httpClient.get(`/devices/?limit=${pageSize}&offset=${offset}`)
            return response.data
        }
    })


    const devices = data?.devices || []
    const pagination = data?.pagination || { limit: 0, offset: 0, total: 0 }
    const { limit, total } = pagination

    const onNext = () => {
        if (offset + limit > total) return null
        setOffset(offset + limit)
    }

    const onPrev = () => {
        if (offset - limit < 0) return null
        setOffset(offset - limit)
    }


    return {
        devices,
        pagination,
        onNext,
        onPrev
    }
}