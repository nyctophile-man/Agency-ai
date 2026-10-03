import React, { useState, useEffect } from 'react'
import Nav from './compt/Nav'
import Hero from './compt/Hero'
import Trusted from './compt/Trusted'
import Servics from './compt/Servics'
import Ourwork from './compt/Ourwork'
import Team from './compt/Team'
import Contactus from './compt/Contactus'
import { Toaster } from 'react-hot-toast'
import Footer from './compt/Footer'

const App = () => {
  const [theme,setTheme]=useState('light')
    return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Nav theme={theme} setTheme={setTheme}/>
      <Hero />
      <Trusted />
      <Servics />
      <Ourwork />
      <Team />
      <Contactus />
      <Footer theme={theme} />
    </div>
  )
}

export default App