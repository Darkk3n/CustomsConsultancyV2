import clsx from "clsx"

interface IImageProps {
   fileName: string
   alternateText?: string
   size?: 'sm' | 'md' | 'lg'
   className?: string
}

export const Image = ({ fileName, alternateText, size, className }: IImageProps) => {
   return (
      <img
         src={fileName}
         alt={alternateText}
         className={clsx(
            'h-auto object-contain rounded',
            {
               'w-full max-w-xs': size === 'sm',
               'w-full max-w-sm md:max-w-md': size === 'md',
               'w-full max-w-md md:max-w-lg': size === 'lg',
            },
            className
         )}
      />
   )
}
