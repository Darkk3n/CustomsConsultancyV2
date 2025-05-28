import './App.css'
import { AllServices, Consultancy, Header, Intro, LegalDefense, Management, Outro, Profile } from './views'


export const App = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-y-6'>
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