export const Intro = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-white px-4 md:px-8 py-8">
            <section className="flex flex-col w-full md:w-1/2 space-y-4 text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    JURÍDICO ADUANERO AGS
                </p>

                <p className="text-sm sm:text-base md:text-2xl leading-relaxed text-justify md:text-left">
                    Es un Despacho Jurídico que ofrece servicios de Asesoría y Defensa Legal
                    en Materia Aduanera y de Comercio Exterior.
                </p>
            </section>
            <section className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <img
                    src="/Services4.webp"
                    alt="Servicios Jurídicos"
                    className="w-full h-auto object-cover rounded"
                />
            </section>
        </section>
    )
}
