interface IArrowContainerProps {
    text: string;
    icon?: string;
}

export const ArrowContainer = ({ text }: IArrowContainerProps) => {
    return (
        <div className="flex flex-row text-white p-6 clip-arrow max-w-xl" style={{ backgroundColor: '#001129' }}>
            <img src="/arrow.svg" alt="arrow" className="w-10 h-10 mr-4" />
            <h2 className="text-xl font-bold">{text}</h2>
        </div>
    )
}
