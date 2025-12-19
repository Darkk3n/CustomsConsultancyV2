import clsx from 'clsx'
import type { ReactNode } from 'react'

interface SectionProps {
   children: ReactNode
   split?: boolean
   centered?: boolean
   className?: string
}

export const Section = ({
   children,
   split = false,
   centered = false,
   className,
}: SectionProps) => {
   return (
      <section
         className={clsx(
            'px-4 md:px-8 mt-10',
            split ? 'flex flex-col md:flex-row gap-8' : 'flex flex-col gap-6',
            centered && 'items-center text-center',
            className
         )}
      >
         {children}
      </section>
   )
}
