import { useEffect, useState } from "react"
import type { Pagination } from "../../../shared/types"
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { Device } from "../types"
import { getDevice } from "../services/getDevices"

export const useDeviceQuery = () => {
    const [offset, setOffset] = useState(0)
    const isMobile = useMediaQuery("(max-width: 768px)");
    const pageSize = isMobile ? 6 : 10;

    useEffect(() => {
        setOffset(0)
    }, [pageSize])

    const { data } = useQuery<{ devices: Device[], pagination: Pagination }>({
        queryKey: ['devices', pageSize, offset],
        queryFn: () => getDevice(pageSize, offset),
        placeholderData: keepPreviousData,
    })


    const devices = data?.devices || []
    const pagination = data?.pagination || { limit: 0, offset: 0, total: 0 }
    const { limit, total } = pagination

    const onNext = () => {
        if (offset + limit > total) return 
        setOffset(offset + limit)
    }

    const onPrev = () => {
        if (offset - limit < 0) return 
        setOffset(offset - limit)
    }


    return {
        devices,
        pagination,
        onNext,
        onPrev
    }
}