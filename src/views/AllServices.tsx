import { Image, SectionContainer } from "../components"

export const AllServices = () => {
    return (
        <SectionContainer split className="md:items-center">
            <section className="w-full md:w-1/2 flex justify-center">
                <Image fileName="/Services.webp" alternateText="servicios" />
            </section>
            <section className="w-full md:w-1/2 text-white space-y-3 text-sm sm:text-base md:text-2xl">
                <p>Asesoría Jurídica en Materia Aduanera y de Comercio Exterior.</p>
                <p>Gestión y resolución de procedimientos administrativos aduaneros.</p>
                <p>Defensa legal ante actos y resoluciones definitivas de autoridad aduanera.</p>
                <p>Capacitación en Temas Aduaneros y de Comercio Exterior.</p>
            </section>
        </SectionContainer>
    )
}
