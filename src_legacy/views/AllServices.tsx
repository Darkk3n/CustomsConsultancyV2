import { Image, SectionContainer } from "../components";

export const AllServices = () => {
    const SERVICES_DATA = [
        { text: "Asesoría Jurídica en Materia Aduanera y de Comercio Exterior.", icon: "/LegalAdvisory1.webp", highlight: true },
        { text: "Gestión y resolución de procedimientos administrativos aduaneros.", icon: "/Management2.webp", highlight: false },
        { text: "Defensa legal ante actos y resoluciones definitivas de autoridad aduanera.", icon: "/LegalDefense3.webp", highlight: false },
        { text: "Capacitación en Temas Aduaneros y de Comercio Exterior.", icon: "/Training4.webp", highlight: true },
    ];

    return (
        <SectionContainer split className="md:items-center py-10">
            <section className="w-full md:w-5/12 flex justify-center mb-8 md:mb-0">
                <Image
                    fileName="/Services.webp"
                    alternateText="servicios"
                    className="w-full h-auto max-w-md border-2 border-blue-500"
                />
            </section>
            <section className="w-full md:w-7/12 flex flex-col space-y-6">
                {SERVICES_DATA.map((service, index) => (
                    <section
                        key={index}
                        className="clip-arrow flex items-center pr-5"
                    >
                        <div className="flex-shrink-0 mr-4 sm:mr-6">
                            <img
                                src={service.icon}
                                alt={service.text}
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                        </div>
                        <div>
                            <p className={`font-bold italic uppercase leading-tight text-sm sm:text-base md:text-xl text-white`}>
                                {service.text}
                            </p>
                        </div>
                    </section>
                ))}
            </section>
        </SectionContainer>
    );
};