interface IArrowContainerProps {
    text: string;
    icon?: string;
}

export const ArrowContainer = ({ text }: IArrowContainerProps) => {
    return (
        <div className="bg-blue-900 text-white p-6 clip-arrow max-w-xl">
            <h2 className="text-xl font-bold">{text}</h2>
        </div>
    )
}
