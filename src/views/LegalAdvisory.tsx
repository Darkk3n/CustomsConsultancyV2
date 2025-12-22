import { ArrowContainer, Image, SectionContainer } from '../components'

export const LegalAdvisory = () => {
   return (
      <SectionContainer split className="text-white">
         <section className='w-full md:w-1/2 space-y-4 text-sm sm:text-base md:text-xl'>
            <ArrowContainer text="Asesoría jurídica en Materia Aduanera y de Comercio Exterior." />
            <p>Te proporciono asesoría jurídica especializada relativa al conocimiento, interpretación y aplicación de:</p>
            <ul className='list-disc list-inside space-y-2 text-left'>
               <li>Ley Aduanera</li>
               <li>Ley de Comercio Exterior</li>
               <li>Código Fiscal de la Federación</li>
               <li>Reglas Generales de Comercio Exterior</li>
               <li>Reglas y Criterios de Carácter General en Materia de Comercio Exterior de la Secretaria de Economía</li>
               <li>Demás normatividad legal aplicable en la materia aduanera y de comercio exterior.</li>
            </ul>
            <p className='text-left'>La Asesoría pueden ser:</p>
            <ul className='list-disc list-inside space-y-2 text-left'>
               <li>
                  <strong>Orientación Jurídica Aduanera:</strong> Recibe respuestas y guías para tus dudas legales en materia aduanera y de comercio exterior.
               </li>
               <li>
                  <strong>Consultoría de Análisis Especial:</strong> Realizamos un análisis profundo de situaciones específicas para identificar riesgos y oportunidades.
               </li>
               <li>
                  Análisis especializado y operativo en los trámites que se deben realizar ante la Aduana de México para realizar Despachos Aduaneros en cumplimiento de la normatividad legal aplicable.
               </li>
            </ul>
            <p className='text-justify'>Con nuestra asesoría especializada, aseguras el cumplimiento normativo de tus operaciones, evitando multas, sanciones y retrasos que puedan impactar negativamente tu negocio.</p>
         </section>
         <section className="w-full md:w-1/2 flex justify-center">
            <Image fileName="/LegalAdvisory.webp" alternateText="asesoria legal" />
         </section>

      </SectionContainer>
   )
}
