import { CiBoxes, CiCircleCheck, CiClock2, CiGrid41, CiTrash, CiWarning } from "react-icons/ci";

export const statsIcons = {
    assigned: CiBoxes,
    available: CiCircleCheck,
    in_repair: CiClock2,
    losts: CiWarning,
    retired: CiTrash,
    total: CiGrid41,
};

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
    { value: null, label: 'Todos los estados' },
    { value: 1, label: 'Activos' },
    { value: 2, label: 'Asignados' },
    { value: 3, label: 'En reparación' },
    { value: 4, label: 'Extraviados' },
    { value: 5, label: 'Retirados' },
]