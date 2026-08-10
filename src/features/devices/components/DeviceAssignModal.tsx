import { useMutation, useQuery } from "@tanstack/react-query"
import { Button } from "../../../shared/components/Button"
import { Input } from "../../../shared/components/Input"
import { Modal } from "../../../shared/components/Modal"
import type { Device } from "../types"
import axios from "axios"
import { useState } from "react"
import { useAuthStore } from "../../auth/store/auth"
import { queryClient } from "../../../app/queryClient"

interface DeviceAssignModalProps {
    deviceSelected: Device | null
    handleCloseModal: () => void
}

export const DeviceAssignModal = ({ deviceSelected, handleCloseModal }: DeviceAssignModalProps) => {
    const [search, setSearch] = useState("")
    const [userSelected, setUserSelected] = useState(null)

    const handleSelect = (user: any) => {
        setUserSelected(user)
        setSearch(user?.email)
    }

    const handleSearch = (value: string) => {
        setUserSelected(null)
        setSearch(value)
    }

    const token = useAuthStore.getState().token;

    const assignDeviceToUser = (user_id: number) => axios.patch(`http://54.94.1.101:8000/api/v1/devices/${deviceSelected?.id}/assign`, { user_id }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const { mutate: assignDeviceToUserMutation } = useMutation({
        mutationFn: (user_id: number) => assignDeviceToUser(user_id),
        onSuccess: () => {
            handleCloseModal()
            queryClient.invalidateQueries({
                queryKey: ["devices"]
            })
        },

    })

    const { data: users, isLoading: isLoadingUsers, isError: isErrorUsers } = useQuery({
        queryKey: ["users", search],
        queryFn: () => axios.get(`http://54.94.1.101:8000/api/v1/users?offset=0&limit=5&search=${search}`)
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        assignDeviceToUserMutation(userSelected?.id)
    }

    return <Modal open={Boolean(deviceSelected)} onClose={handleCloseModal} title="Asignar dispositivo">
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input label="" placeholder="Ingrese nombre" onChange={handleSearch} value={search} />
            <div className="">
                {isLoadingUsers && !search && <p>Buscando usuarios...</p>}
                {isErrorUsers && <p>No se pudo conectar con el servidor</p>}
                {users?.data?.users.length === 0 && <p>No se encontraron usuarios</p>}
                {
                    !userSelected && users?.data?.users.map(user => (
                        <div
                            key={user.id}
                            className="p-2 border border-gray-200 hover:bg-blue-50 cursor-pointer gap-2 "
                            onClick={() => handleSelect(user)}
                        >
                            <p>{user.first_name} {user.last_name} | {user.email}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-2 justify-end mt-2">
                <Button text="Cancelar" className="bg-white border border-gray-300" onClick={handleCloseModal} />
                <Button text="Guardar" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" type='submit' />
            </div>
        </form >
    </Modal >
}