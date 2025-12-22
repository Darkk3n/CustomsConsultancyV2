import { Image } from '../components'
import { SectionContainer } from '../components/SectionContainer'

export const Intro = () => {
    return (
        <SectionContainer split className="items-center text-white">
            <section className="w-full md:w-1/2 space-y-3">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    JURÍDICO ADUANERO AGS
                </p>

                <p className="text-sm sm:text-base md:text-2xl text-justify">
                    Es un Despacho Jurídico que ofrece servicios de Asesoría y Defensa Legal
                    en Materia Aduanera y de Comercio Exterior.
                </p>
            </section>
            <section className="w-full md:w-1/2 flex justify-center">
                <Image fileName="/Services4.webp" alternateText="introduccion" />
            </section>
        </SectionContainer>
    )
}
