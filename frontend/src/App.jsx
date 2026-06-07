import { useState } from 'react'
import Landing from './pages/landing'
import About from './pages/about'
import JoinMeeting from './pages/meet'
import Footer from './pages/footer'
import Header from './pages/header'
import Login from './pages/login'
import Signup from './pages/signup'


function App() {


  return (
    <>
      <Header />
      <Landing/>
      <About/>
      <Login />
      <Signup />
      <JoinMeeting/>
      <Footer/>
      
    </>
  )
}

export default App
