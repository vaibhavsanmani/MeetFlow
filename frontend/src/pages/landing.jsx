import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function LandingPage() {
  const router = useNavigate();

  const handleJoinAsGuest = () => {
    router("/aljk23")
  }

  const handleRegister = () => {
    router("/auth")
  }

  const handleLogin = () => {
    router("/auth")
  }

  return (
    <div className='landingPageContainer' role="main" aria-label="Landing page">
      <nav aria-label="Main navigation">
        <div className='navHeader'>
          <h1>Apna Video Call</h1>
        </div>
        <div className='navlist'>
          <button 
            onClick={handleJoinAsGuest}
            aria-label="Join as guest"
          >
            Join as Guest
          </button>
          <button 
            onClick={handleRegister}
            aria-label="Register for an account"
          >
            Register
          </button>
          <button 
            onClick={handleLogin}
            aria-label="Login to your account"
            style={{ backgroundColor: 'var(--primary-orange)', color: 'white' }}
          >
            Login
          </button>
        </div>
      </nav>

      <section className="landingMainContainer">
        <div>
          <h2>
            <span>Connect</span> with your loved Ones
          </h2>
          <p>Cover a distance by Apna Video Call</p>
          <Link 
            to={"/auth"}
            role="button"
            aria-label="Get started with Apna Video Call"
          >
            Get Started
          </Link>
        </div>
        <div>
          <img 
            src="/mobile.png" 
            alt="Mobile phone showing video call interface"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}