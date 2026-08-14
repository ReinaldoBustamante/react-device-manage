import { Button } from "../../../shared/components/Button"
import { TitlePage } from "../../../shared/components/TitlePage"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"

export const UserPages = () => {

    usePageTitle('Administrar usuarios - Device Management')

    return <div className="flex justify-between items-center">
        <TitlePage title="Administrar usuarios" description="Registra usuarios, gestiona sus roles y permisos." />
        <Button text="Nuevo usuario" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" />
    </div>
}