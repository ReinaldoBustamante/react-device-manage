export type Device = {
    id: number
    brand: string
    buy_date: string
    model: string
    serial_number: string
    status_id: number
    type_id: number
    updated_at: string 
    created_at: string
    user_id: number | null
}

export type ModalTypes = 'new' | 'assign' | 'update'