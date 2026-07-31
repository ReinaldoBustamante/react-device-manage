
interface SelectProps {
    className: string,
    options: {
        value: number | string | null,
        label: string
    }[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}


export const Select = ({ className, options, onChange }: SelectProps) => {
    return <select className={className} onChange={onChange}>
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
}