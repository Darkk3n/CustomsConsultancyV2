import { ArrowContainer, SectionContainer } from "../components"

export const Consultancy = () => {
    return (
        <SectionContainer split className="text-white">
            <section className="w-full md:w-1/2 text-justify space-y-4">
                <ArrowContainer text="Capacitación y actualización en materia aduanera y de comercio exterior." />
                <div>
                    Imparto cursos de capacitación que te permiten mantenerte actualizado y adquirir conocimientos clave en materia aduanera y de comercio exterior.
                </div>
                <div>
                    Los cursos están diseñados para agregar valor a tus operaciones y ayudarte a manejar cualquier situación compleja que surja en el entorno aduanero.
                </div>
                <div className="bg-gray-900 p-2 text-center">
                    <a
                        href="https://wa.me/5212294639014"
                        target="_blank"
                        className="block p-4 md:p-5 rounded hover:bg-gray-800 transition"
                    >
                        ¿Te interesa capacitarte? Conoce más sobre nuestros cursos
                    </a>
                </div>
            </section>
            <section className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <img
                    src="/Consultancy.webp"
                    alt="consultoría"
                    className="w-full h-auto object-cover rounded"
                />
            </section>
        </SectionContainer>
    )
}
