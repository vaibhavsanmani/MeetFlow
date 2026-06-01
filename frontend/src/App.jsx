import { useState } from 'react'
import Landing from './pages/landing'
import About from './pages/about'
import JoinMeeting from './pages/meet'
import Footer from './pages/footer'
import Header from './pages/header'


function App() {


  return (
    <>
      <Header />
      <Landing/>
      <About/>
      <JoinMeeting/>
      <Footer/>
      
    </>
  )
}

export default App
