import { CiBoxes, CiCircleCheck, CiClock2, CiGrid41, CiTrash, CiWarning } from "react-icons/ci";

export const statsIcons = {
    assigned: CiBoxes,
    available: CiCircleCheck,
    in_repair: CiClock2,
    losts: CiWarning,
    retired: CiTrash,
    total: CiGrid41,
};

export const statsColors = {
    assigned: "bg-[#FFDAA6] text-[#E66F00]",
    available: "bg-[#D0FAE5] text-[#007A55]",
    in_repair: "bg-[#FFF3CD] text-[#9D5422]",
    losts: "bg-[#FFE4E6] text-[#B91C1C]",
    retired: "bg-[#D9D9D9] text-[#374151]",
    total: "bg-[#E6F3F8] text-[#0085B9]",
}

export const statsName = {
    assigned: "Asignados",
    available: "Disponibles",
    in_repair: "En reparación",
    losts: "Extraviados",
    retired: "Retirados",
    total: "Total"
}

export const tableHeaders = ['Marca', 'Modelo', 'N° Serie', 'Tipo', 'Estado', 'Fecha de compra', 'Asignado a']

export const tableSelectOptions = [
    { value: undefined, label: 'Todos los estados' },
    { value: 1, label: 'Activos' },
    { value: 2, label: 'Asignados' },
    { value: 3, label: 'En reparación' },
    { value: 4, label: 'Extraviados' },
    { value: 5, label: 'Retirados' },
]