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

export const deviceType = {
    1: 'Telefono',
    2: 'Portátil',
    3: 'Tablet',
    4: 'Monitor',
    5: 'Impresora',
    6: 'Escáner',
    7: 'Servidor',
    8: 'Red',
    9: 'Otro',
}

export const deviceStatus = {
    1: 'Disponible',
    2: 'Asignado',
    3: 'En reparación',
    4: 'Extraviado',
    5: 'Retirado',
}

export const statusColor = {
    1: 'bg-[#D0FAE5] text-[#006045] border border-[#7DDEB2]', // Verde
    2: 'bg-[#D6EAF8] text-[#0B5CAD] border border-[#8EC5F4]', // Azul
    3: 'bg-[#FFF3CD] text-[#8A5A00] border border-[#F2D06B]', // Amarillo
    4: 'bg-[#FFE4E6] text-[#B42318] border border-[#F6A8B2]', // Rojo
    5: 'bg-[#E5E7EB] text-[#374151] border border-[#9CA3AF]', // Gris
}