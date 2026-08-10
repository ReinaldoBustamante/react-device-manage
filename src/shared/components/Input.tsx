export interface InputProps {
    label: string
    onChange?: (value: string | null) => void
    value?: string
    placeholder?: string
    type?: string
    register?: any
}

export const Input = ({ label, placeholder = 'Ingresa un valor', type = 'text', register, onChange, value }: InputProps) => {
    return (
        <div className="flex flex-col gap-1 flex-1">
            <label htmlFor={label}>{label}</label>
            <input value={value} type={type} id={label} className="border border-gray-300 rounded-md px-2 py-1" placeholder={placeholder} {...register} onChange={(e) => onChange?.(e.target.value)} />
        </div>
    )

}