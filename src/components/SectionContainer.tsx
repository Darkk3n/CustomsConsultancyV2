import clsx from 'clsx'
import type { ReactNode } from 'react'

interface SectionProps {
   children: ReactNode
   split?: boolean
   centered?: boolean
   reverse?: boolean
   className?: string
}

export const SectionContainer = ({
   children,
   split = false,
   centered = false,
   reverse = false,
   className,
}: SectionProps) => {
   return (
      <section
         className={clsx(
            'px-4 md:px-8 mt-10',
            split && 'flex flex-col md:flex-row gap-8',
            split && reverse && 'md:flex-row-reverse',
            !split && 'flex flex-col gap-6',
            centered && 'items-center text-center',
            className
         )}
      >
         {children}
      </section>
   )
}
