import './App.css'
import { ArrowContainer } from './components'
import { AllServices, Consultancy, Header, Intro, LegalDefense, Management, Outro, Profile } from './views'


export const App = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <ArrowContainer text='Asesoría Jurídica en Materia Aduanera y de Comercio Exterior.' />
      <Header />
      <Intro />
      <Profile />
      <AllServices />
      <Management />
      <LegalDefense />
      <Consultancy />
      <Outro />
    </main>
  )
}