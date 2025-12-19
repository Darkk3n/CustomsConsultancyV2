import { ArrowContainer } from "../components"

export const Management = () => {
    return (
        <section className="mt-8 flex flex-col md:flex-row items-start gap-6 px-4 md:px-8 text-white">
            <section className="w-full md:w-1/2 space-y-4 text-sm sm:text-base md:text-xl">
                <ArrowContainer text="Gestión y resolución de procedimientos administrativos aduaneros" />

                <p>
                    Te acompaño en la gestión y resolución de tus procedimientos
                    administrativos aduaneros, incluyendo:
                </p>

                <ul className="list-disc list-inside space-y-2 text-left">
                    <li>Depósito ante la Aduana de Mercancías.</li>
                    <li>Recuperación de mercancías que causaron abandono.</li>
                    <li>Liberación de contenedores y vehículos.</li>
                    <li>
                        Procedimientos Administrativos en Materia Aduanera por embargo de
                        mercancías.
                    </li>
                    <li>Procedimientos Administrativos de Incidencias Simples.</li>
                    <li>
                        Gestión de diversos trámites ante las Autoridades Aduaneras relativos
                        a los actos y formalidades de la introducción o extracción de
                        mercancías.
                    </li>
                </ul>

                <p>
                    Nuestra experiencia asegura una orientación precisa y eficaz en cada
                    paso del proceso.
                </p>
            </section>
            <section className="w-full md:w-1/2 flex flex-col items-center space-y-4">
                <img
                    src="/Management.webp"
                    alt="gestión"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded"
                />

                <div className="bg-gray-900 w-full text-center rounded">
                    <a
                        href="https://wa.me/5212294639014"
                        target="_blank"
                        className="block p-4 md:p-5 hover:bg-gray-800 transition"
                    >
                        ¿Necesita apoyo en un procedimiento administrativo? Contáctanos para
                        obtener más información
                    </a>
                </div>
            </section>
        </section>
    )
}
