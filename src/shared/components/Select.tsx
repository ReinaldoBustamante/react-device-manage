
interface SelectProps {
    options: {
        value: number | string | undefined,
        label: string
    }[],
    onChange?: (value: number | null) => void
    label?: string,
    disabled?: boolean
    value?: number
    register?: any
}


export const Select = ({ label, options, onChange, disabled = false, value, register }: SelectProps) => {
    return <div className="flex flex-col flex-1">
        <label htmlFor={label}>{label}</label>
        <select disabled={disabled} id={label} className="appearance-none rounded border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-800" onChange={(e) => onChange(Number(e.target.value))} defaultValue={value} {...register}>
            {options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
        </select>
    </div>
}