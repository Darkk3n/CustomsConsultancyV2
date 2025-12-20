import './App.css'
import { AllServices, Consultancy, Header, Intro, LegalAdvisory, LegalDefense, Management, Outro, Profile } from './views'


export const App = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-y-6'>
      <Header />
      <Intro />
      <Profile />
      <AllServices />
      <LegalAdvisory />
      <Management />
      <LegalDefense />
      <Consultancy />
      <Outro />
    </main>
  )
}