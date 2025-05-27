import { ArrowContainer } from "../components"

export const Consultancy = () => {
    return (
        <section className="mt-2 flex flex-row items-center text-white">
            <section className="w-1/2 text-justify">
                <ArrowContainer text="Capacitación y actualización en materia aduanera y de comercio exterior." />
                <div>Imparto cursos de capacitación que te permiten mantenerte actualizado y adquirir conocimientos clave en materia aduanera y de comercio exterior.
                </div>
                <br />
                <div>Los cursos están diseñados para agregar valor a tus operaciones y ayudarte a manejar cualquier situación compleja que surja en el entorno aduanero.</div>
                <div className="bg-gray-900 p-2 text-center">
                    <a href="https://wa.me/5212294639014" target="_blank" className="p-5 text-center">¿Te interesa capacitarte? Conoce más sobre nuestros cursos</a>
                </div>
            </section>
            <section className="w-1/2">
                <img src="/Consultancy.webp" alt="consultoría" />
            </section>
        </section>
    )
}
