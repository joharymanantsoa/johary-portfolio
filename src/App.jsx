import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Information from './components/Information/Information'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact.jsx'

import { initToolbar } from '@stagewise/toolbar';

if (import.meta.env.MODE === 'development') {
  initToolbar({
    plugins: [] // tu peux ajouter des plugins plus tard
  });
}

function App() {
 
  return (
    <>
     <Information/>

     <Education/>
    
    <Contact/>
    </>
  )
}

export default App
