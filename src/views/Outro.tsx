import { faFacebook, faInstagram, faLinkedin, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { SocialMediaIcon } from "../components/SocialMediaIcon"

export const Outro = () => {
    return (
        <section className="flex flex-row mt-3">
            <section className="w-1/2">
                <img src="/Outro.webp" alt="outro" className="w-full" />
            </section>
            <section className="w-1/2">
                <p className="text-white text-2xl text-justify ml-3">Mi trayectoria incluye haber formado parte de la Administración Local Jurídica de Veracruz, así como Abogado de Aduanas Marítimas del Servicio de Administración Tributaria, así como en el sector privado como asesor jurídico de agentes aduanales, empresas y particulares, proporcionado soluciones prácticas y legales adaptadas a las necesidades de mis clientes, proporcionando tranquilidad y certeza en sus operaciones de comercio exterior.</p>
                <br />
                <p className="text-white text-2xl text-justify ml-3">Si deseas más información o necesitas apoyo en un caso específico, estoy para ayudarte. Escríbeme y platicamos sobre cómo puedo contribuir a solucionar tus necesidades.</p>
                <div className='flex flex-row items-center justify-around mt-5'>
                    <SocialMediaIcon icon={faWhatsapp} link='https://wa.me/5212294639014' />
                    <SocialMediaIcon icon={faFacebook} link='https://www.facebook.com/ic.aduanal.5' />
                    <SocialMediaIcon icon={faTiktok} link='https://www.tiktok.com/@juridicoaduaneroags?_t=8rVP0nXmsQa&_r=1' />
                    <SocialMediaIcon icon={faInstagram} link='https://www.instagram.com/juridicoags?igsh=aDdqbXQ1bWk1Ynlo' />
                    <SocialMediaIcon icon={faLinkedin} link='https://www.linkedin.com/in/andr%C3%A9s-aguilar-s%C3%A1nchez-a78967273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
                </div>
            </section>
        </section>
    )
}
