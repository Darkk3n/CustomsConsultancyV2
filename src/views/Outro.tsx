import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { Image, ProfileTitle, SectionContainer } from '../components'
import { SocialMediaIcon } from '../components/SocialMediaIcon'

export const Outro = () => {
    return (
        <SectionContainer split>
            <section className="w-full md:w-1/2 flex justify-center">
                <Image fileName="/Outro.webp" alternateText="outro" />
            </section>
            <section className="w-full md:w-1/2 space-y-5 text-white">
                <ProfileTitle />
                <p className="text-sm sm:text-base md:text-xl text-justify">
                    Mi trayectoria incluye haber formado parte de la Administración Local
                    Jurídica de Veracruz, así como Abogado de Aduanas Marítimas del Servicio
                    de Administración Tributaria, además de desempeñarme en el sector
                    privado como asesor jurídico de agentes aduanales, empresas y
                    particulares, proporcionando soluciones prácticas y legales adaptadas
                    a las necesidades de mis clientes.
                </p>

                <p className="text-sm sm:text-base md:text-xl text-justify">
                    Si deseas más información o necesitas apoyo en un caso específico,
                    estoy para ayudarte. Escríbeme y platicamos sobre cómo puedo contribuir
                    a solucionar tus necesidades.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <SocialMediaIcon icon={faMobileScreen} text="229-463-9014" />
                    <SocialMediaIcon
                        icon={faEnvelope}
                        text="juridico.aduanero.ags@gmail.com"
                        isBold
                    />
                </div>
                <div className="flex flex-wrap justify-center sm:justify-between gap-4 pt-2 pb-5">
                    <SocialMediaIcon icon={faWhatsapp} link="https://wa.me/5212294639014" />
                    <SocialMediaIcon icon={faFacebook} link="https://www.facebook.com/ic.aduanal.5" />
                    <SocialMediaIcon icon={faTiktok} link="https://www.tiktok.com/@juridicoaduaneroags" />
                    <SocialMediaIcon icon={faInstagram} link="https://www.instagram.com/juridicoags" />
                    <SocialMediaIcon icon={faLinkedin} link="https://www.linkedin.com/in/andr%C3%A9s-aguilar-s%C3%A1nchez-a78967273" />
                </div>
            </section>
        </SectionContainer>
    )
}
