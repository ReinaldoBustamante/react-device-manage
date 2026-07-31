export type Device = {
    "serial_number": string,
    "model": string,
    "created_at": string,
    "status_id": number,
    "user_id": number | null,
    "id": number,
    "brand": string,
    "buy_date": string,
    "updated_at": string | null,
    "type_id": number
}

export type Pagination = {
    total: number,
    offset: number,
    limit: number
}

export type DevicePaginated = {
    devices: Device[],
    pagination: Pagination
}