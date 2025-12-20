interface IArrowContainerProps {
    text: string;
    icon?: string;
}

export const ArrowContainer = ({ text }: IArrowContainerProps) => {
    return (
        <div
            className="clip-arrow max-w-full sm:max-w-xl"
            style={{ backgroundColor: '#001129' }}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-white p-4 sm:p-6 pr-8">
                <h2 className="text-lg sm:text-xl font-bold">
                    {text}
                </h2>
            </div>
        </div>
    )
}




{/* <img
                src="/arrow.svg"
                alt="arrow"
                className="w-10 h-10 mr-0 sm:mr-4 mb-2 sm:mb-0"
            /> */}