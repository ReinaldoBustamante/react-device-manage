import { TitlePage } from "../../../shared/components/TitlePage"
import { useEffect } from "react"

export const RegisterPage = () => {
    useEffect(() => {
        document.title = "Registro de acciones - Device Management"
    }, [])

    return <div>
        <TitlePage title="Registro de acciones" description="Trazabilidad completa de los cambios sobre los dispositivos." />
    </div>
}