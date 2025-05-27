import { ArrowContainer } from "../components"

export const Management = () => {
    return (
        <section className="mt-5 text-white flex flex-row">
            <section className="w-1/2 text-1xl">
                <ArrowContainer text="Gestión y resolución de procedimientos administrativos aduaneros" />
                <div>Te acompaño en la gestión y resolución de tus procedimientos administrativos aduaneros, incluyendo:</div>
                <ul className="list-disc text-left">
                    <li>Deposito ante la Aduana de Mercancías.</li>
                    <li>Recuperación de mercancías que causaron abandono.</li>
                    <li>Liberación de contenedores y vehículos.</li>
                    <li>Procedimientos Administrativos en Materia Aduanera por embargo de mercancías.</li>
                    <li>Procedimientos Administrativos de Incidencias Simples.</li>
                    <li>Gestión de diversos tramites ante las Autoridades Aduaneras relativos a los actos y formalidades de la introducción o extracción de mercancías. </li>
                </ul>
                <br />
                <div>Nuestra experiencia asegura una orientación precisa y eficaz en cada paso del proceso.</div>
            </section>
            <section className="w-1/2 flex flex-col items-center">
                <img src="/Management.webp" alt="gestión" className="w-80" />
                <div className="bg-gray-900 p-2">
                    <a href="https://wa.me/5212294639014" target="_blank" className="p-5 text-center">¿Necesita apoyo en un procedimiento administrativo? Contáctanos para obtener más información</a>
                </div>
            </section>
        </section>
    )
}
