import { TitlePage } from "../../../shared/components/TitlePage"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"

export const RegisterPage = () => {

    usePageTitle('Registro de acciones - Device Management')

    return <div>
        <TitlePage title="Registro de acciones" description="Trazabilidad completa de los cambios sobre los dispositivos." />
    </div>
}