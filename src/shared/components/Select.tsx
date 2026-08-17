import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

interface SelectProps {
    placeholder: string
    label: string,
    onChange: (value: number ) => void
    options: { value: number, label: string }[],
    error?: string
    value?: number
}

export const Select = ({ placeholder, options, onChange, value, error, label }: SelectProps) => {
    const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false)
  
    const selectOption = (value: number) => {
        setSelectIsOpen(false)
        onChange(value)
    }

    const valueText = options.find(option => option.value === value)?.label || placeholder

    return <div className="relative">
        <div className="grid gap-1">
            <span className="font-semibold">{label}</span>
            <div onClick={() => setSelectIsOpen(!selectIsOpen)} className="cursor-pointer w-full py-1 px-3 border border-gray-300 rounded-md flex justify-between items-center">
                <p>{valueText}</p>
                <IoIosArrowDown />
            </div>
        </div>
        <div className={`border rounded-md border-gray-300 absolute top-16 bg-white w-full max-h-33 overflow-y-auto ${!selectIsOpen && 'hidden'}`}>
            {
                options.map(option => <p onClick={() => selectOption(option.value)} className="px-3 py-1 hover:bg-gray-100 cursor-pointer border-b border-gray-200">{option.label}</p>)
            }
        </div>
        {error && <p className="text-sm text-red-500">(*) {error}</p>}
    </div>
}