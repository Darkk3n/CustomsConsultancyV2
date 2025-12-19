export const AllServices = () => {
    return (
        <section className="mt-6 flex flex-col md:flex-row items-start gap-6 px-4 md:px-8">
            <section className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                    src="/Services.webp"
                    alt="servicios"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                />
            </section>

            {/* Text */}
            <section className="w-full md:w-1/2 text-white space-y-3 text-sm sm:text-base md:text-2xl">
                <p>Asesoría Jurídica en Materia Aduanera y de Comercio Exterior.</p>
                <p>Gestión y resolución de procedimientos administrativos aduaneros.</p>
                <p>Defensa legal ante actos y resoluciones definitivas de autoridad aduanera.</p>
                <p>Capacitación en Temas Aduaneros y de Comercio Exterior.</p>
            </section>
        </section>
    )
}
