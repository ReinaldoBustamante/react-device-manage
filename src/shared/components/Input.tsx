
interface InputProps {
    label: string
    type?: string
    error?: string
    placeholder?: string
    className?: string
}

export const Input = ({ label, placeholder, className, error, type = 'text', ...props }: InputProps) => {
    return <div>
        <label htmlFor={label} className="font-semibold">{label}</label>
        <input {...props} type={type} id={label} className={`${className} w-full border border-gray-200 px-3 py-1 rounded-md`} placeholder={placeholder} />
        {error && <p className="text-sm text-red-500">(*) {error}</p>}
    </div>
}