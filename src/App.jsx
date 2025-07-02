import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Information from './components/Information/Information'
import Technologie from './components/Technologie/Technologie'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'



function App() {
 
  return (
    <>
     <Information/>

     <Technologie/>
    
     <Contact/>

     <Footer/>
    </>
  )
}

export default App
