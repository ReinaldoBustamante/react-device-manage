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