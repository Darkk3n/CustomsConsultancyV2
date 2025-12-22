interface IImageProps {
   fileName: string
   alternateText?: string
}

export const Image = ({ fileName, alternateText }: IImageProps) => {
   return (
      <img
         src={fileName}
         alt={alternateText}
         className="
  w-full
  max-w-xs
  sm:max-w-sm
  md:max-w-md
  lg:max-w-lg
  xl:max-w-xl
  h-auto
  object-contain
  rounded"
      />
   )
}
