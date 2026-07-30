
interface SelectProps {
    className: string,
    options: {
        value: string,
        label: string
    }[]
}


export const Select = ({ className, options }: SelectProps) => {
    return <select className={className}>
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
}