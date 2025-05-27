import './App.css'
import { Consultancy } from './views/Consultancy'
import { Header } from './views/Header'
import { Intro } from './views/Intro'
import { LegalDefense } from './views/LegalDefense'
import { Management } from './views/Management'
import { Outro } from './views/Outro'
import { Profile } from './views/Profile'
import { AllServices } from './views/AllServices'

export const App = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
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