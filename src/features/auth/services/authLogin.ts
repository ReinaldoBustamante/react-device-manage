import type { LoginForm } from "../types/auth"
import { httpClient } from "../../../app/httpClient"


export const authLogin = async (data: LoginForm) => {

    const response = await httpClient.post("/auth/login", data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    return response.data
}
