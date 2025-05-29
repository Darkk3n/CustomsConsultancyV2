import { ProfileTitle } from "../components"

export const Profile = () => {
    return (
        <section className="flex flex-row items-center justify-center">
            <section className="w-1/2">
                <p className="text-white text-2xl text-justify">Soy <span className="font-bold"> Andrés Aguilar Sánchez</span>, Licenciado en Derecho, con un Diplomado en Derecho Aduanero y actualmente Maestrante en Derecho Aduanero y de Comercio Exterior. Cuento con más de 20 años de experiencia en consultoría y defensa jurídica en materia aduanera y de comercio exterior, además de ser capacitador y catedrático en temas especializados por más de 18 años.</p>
                <br />
                <p className="text-white text-2xl text-justify">
                    <span className="font-bold">Mi objetivo principal</span> es proporcionar asesoramiento legal y operativo preventivo en temas aduaneros y de comercio exterior, fortaleciendo así la legalidad de los despachos aduaneros de mis clientes.
                </p>
            </section>
            <section className="w-1/2 flex flex-col items-center" >
                {/* <img src='/Intro.webp' className="ml-6" /> */}
                <ProfileTitle />
            </section>
        </section>
    )
}
