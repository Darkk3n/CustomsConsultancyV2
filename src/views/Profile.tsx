import { ProfileTitle } from '../components'
import { SectionContainer } from '../components/SectionContainer'

export const Profile = () => {
    return (
        <SectionContainer split className="items-center text-white">
            <section className="w-full md:w-1/2 space-y-4 text-sm sm:text-base md:text-2xl text-justify">
                <p>
                    Soy <span className="font-bold">Andrés Aguilar Sánchez</span>, Licenciado
                    en Derecho, con un Diplomado en Derecho Aduanero y actualmente Maestrante
                    en Derecho Aduanero y de Comercio Exterior. Cuento con más de 20 años de
                    experiencia en consultoría y defensa jurídica en materia aduanera y de
                    comercio exterior, además de ser capacitador y catedrático en temas
                    especializados por más de 18 años.
                </p>

                <p>
                    <span className="font-bold">Mi objetivo principal</span> es proporcionar
                    asesoramiento legal y operativo preventivo en temas aduaneros y de
                    comercio exterior, fortaleciendo así la legalidad de los despachos
                    aduaneros de mis clientes.
                </p>
            </section>
            <section className="w-full md:w-1/2 flex justify-center">
                <ProfileTitle />
            </section>
        </SectionContainer>
    )
}
