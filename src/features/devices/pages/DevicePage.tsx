import { Button } from "../../../shared/components/Button"
import { TitlePage } from "../../../shared/components/TitlePage"

export const DevicePage = () => {
    return <div>
        <div className="flex justify-between items-center">
            <TitlePage title="Administrar dispositivos" description="Crea, edita y elimina el inventario TI." />
            <Button text="Nuevo dispositivo" className="text-white bg-[#0085B9] hover:bg-[#0897cc]" />
        </div>
    </div>
}