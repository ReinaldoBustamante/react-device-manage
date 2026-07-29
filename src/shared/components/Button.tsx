import type { IconType } from "react-icons";

interface Props {
    text: string;
    icon?: IconType
    className?: string;
    onClick?: () => void;
}

export const Button = ({ text, icon: Icon, className, onClick }: Props) => {
    return <button className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg ${className}`} onClick={onClick}>
        {Icon && <Icon className="text-xl" />}
        {text}
    </button>

}