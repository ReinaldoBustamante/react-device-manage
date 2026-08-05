export interface InputProps {
    label: string
    placeholder?: string
    type?: string
    value?: string
    register?: any
}

export const Input = ({ label, placeholder = 'Ingresa un valor', type = 'text', value, register }: InputProps) => {
    return (
        <div className="flex flex-col gap-1 flex-1">
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} className="border border-gray-300 rounded-md px-2 py-1" placeholder={placeholder} value={value} {...register} />
        </div>
    )

}