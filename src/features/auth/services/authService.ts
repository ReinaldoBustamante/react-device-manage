import axios from "axios"
import type { LoginForm } from "../types/auth"

export const authService = () => {

    const login = async (data: LoginForm) => {
        try {
            const response = await axios.post("http://18.230.198.130:8000/api/v1/auth/login", data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            return response.data
        } catch (error) {
            throw error
        }
    }

    return {
        login
    }
}