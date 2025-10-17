import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import reactLogo from './assets/react.svg'
import './App.css'
import Information from './components/Information/Information'
import Technologie from './components/Technologie/Technologie'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'




function App() {
 
  return (
    <>
     <Analytics/>

     <Information/>

     <Technologie/>

     <Project/>
    
     <Contact/>

     <Footer/>
    </>
  )
}

export default App
