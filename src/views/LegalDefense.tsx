import { SectionContainer } from '../components'
import { ArrowContainer } from '../components/ArrowContainer'

export const LegalDefense = () => {
    return (
        <SectionContainer reverse split className="text-white">
            <section className="w-full md:w-1/2 space-y-4 text-sm sm:text-base md:text-xl">
                <ArrowContainer text="Defensa legal ante actos y resoluciones definitivas de autoridad aduanera." />
                <p>
                    Estudiamos los actos de autoridad que puedan afectar tus intereses y
                    definimos una estrategia legal robusta para conseguir el mejor
                    resultado posible. Ofrecemos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-left">
                    <li>
                        Recursos de Revocación para impugnar actos de autoridad aduanera
                        definitivos y determinantes de créditos fiscales.
                    </li>
                    <li>
                        Juicios de Nulidad que permiten impugnar resoluciones emitidas por las
                        autoridades aduaneras.
                    </li>
                    <li>
                        Juicios de amparo que protegen tus derechos humanos ante actos de las
                        autoridades aduaneras.
                    </li>
                </ul>
                <div className="bg-gray-900 rounded text-center">
                    <a
                        href="https://wa.me/5212294639014"
                        target="_blank"
                        className="block p-4 md:p-5 hover:bg-gray-800 transition"
                    >
                        ¿Buscas defensa legal especializada? Consulta cómo podemos ayudarte
                    </a>
                </div>
            </section>
            <section className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/LegalDefense.webp"
                    alt="defensa legal"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded"
                />
            </section>
        </SectionContainer>
    )
}
