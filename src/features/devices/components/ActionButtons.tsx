import { Button } from "../../../shared/components/Button"

export interface ActionButtonsProps {
    onEdit: () => void
}

export const ActionButtons = ({ onEdit }: ActionButtonsProps) => {
    return <td className="py-3 px-4 text-gray-700">
        <div className="flex gap-2">
            <Button text="Editar" className="bg-white border rounded-md text-gray-700" onClick={onEdit} />
        </div>
    </td>
}