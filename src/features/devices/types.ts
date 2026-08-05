import type z from "zod"
import type { Pagination } from "../../shared/types"
import type { DeviceSchema } from "./schemas/device"

export type Device = {
    serial_number: string,
    model: string,
    buy_date: string,
    created_at: string,
    status_id: number,
    user_id: number | null,
    id: number,
    brand: string,
    updated_at: string | null,
    type_id: number
}

export type DeviceResponse = {
    devices: Device[]
    pagination: Pagination
}

export type TypeDevice = {
    id: number
    name: string
}

export type TypeDeviceResponse = TypeDevice[]

export type DeviceFormType = z.infer<typeof DeviceSchema>