import { TitlePage } from "../../../shared/components/TitlePage"
import { usePageTitle } from "../../../shared/hooks/usePageTitle"


export const DevicePage = () => {
    usePageTitle("Devices - Device Management")

    return <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
        </div>



    </div>
}