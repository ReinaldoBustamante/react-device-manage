
interface TitlePageProps {
    title: string;
    description: string;
}

export const TitlePage = ({ title, description }: TitlePageProps) => {
    return <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-md text-gray-600">{description}</p>
    </div>
}