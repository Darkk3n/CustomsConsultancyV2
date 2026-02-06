interface IArrowContainerProps {
    text: string;
    icon?: string;
}

export const ArrowContainer = ({ text }: IArrowContainerProps) => {
    return (
        <div
            className="clip-arrow flex items-center p-4 sm:p-6 pr-12 max-w-full sm:max-w-xl"
            style={{ backgroundColor: '#001129' }}
        >
            <div className="flex-shrink-0 mr-1 sm:mr-2">
                <img
                    src="/LegalDefenseIcon.webp"
                    alt="Legal Icon"
                    className="w-32 h-32 sm:w-32 sm:h-32 object-contain"
                />
            </div>
            <div className="text-white">
                <h2 className="text-lg sm:text-2xl font-bold leading-tight italic uppercase tracking-wide">
                    {text}
                </h2>
            </div>
        </div>
    );
}




