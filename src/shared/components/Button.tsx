import type { IconType } from "react-icons";

interface Props {
    text: string;
    icon?: IconType
    className?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button"
}

export const Button = ({ text, icon: Icon, className, onClick, type }: Props) => {
    return <button className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg ${className}`} onClick={onClick} type={type}>
        {Icon && <Icon className="text-xl" />}
        {text}
    </button>

}