import './App.css'
import { Consultancy } from './components/Consultancy'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { LegalDefense } from './components/LegalDefense'
import { Management } from './components/Management'
import { Outro } from './components/Outro'
import { Profile } from './components/Profile'
import { AllServices } from './components/AllServices'

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