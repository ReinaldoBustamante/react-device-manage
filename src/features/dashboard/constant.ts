import type { Stats } from "./types";
import { FaArchive, FaCheckCircle, FaLaptop, FaSearchLocation, FaTools, FaUserCheck } from "react-icons/fa";

export const dashboardStats = [
    { label: 'Dispositivos Totales', accessor: (stats: Stats) => stats.total, icon: FaLaptop, iconColors: 'bg-blue-300' },
    { label: 'Disponibles', accessor: (stats: Stats) => stats.available, icon: FaCheckCircle, iconColors: 'bg-green-300' },
    { label: 'Asignados', accessor: (stats: Stats) => stats.assigned, icon: FaUserCheck, iconColors: 'bg-orange-300' },
    { label: 'En reparación', accessor: (stats: Stats) => stats.in_repair, icon: FaTools, iconColors: 'bg-yellow-300' },
    { label: 'Perdidos', accessor: (stats: Stats) => stats.losts, icon: FaSearchLocation, iconColors: 'bg-red-300' },
    { label: 'Retirados', accessor: (stats: Stats) => stats.retired, icon: FaArchive, iconColors: 'bg-gray-300' },
]