import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "PROFESSIONAL DJ SERVICES",
    "UNFORGETTABLE EXPERIENCES",
    "BEATS THAT MOVE SOULS",
    "YOUR PARTY, OUR PASSION"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">DJ 4CE</span>
              <span className="title-sub">Where Music Meets Magic</span>
            </h1>
            
            <div className="rotating-text">
              <p key={currentText}>{texts[currentText]}</p>
            </div>
            
            <p className="hero-description">
              Transform your events into unforgettable experiences with professional DJ services 
              tailored to your unique style. From intimate gatherings to massive celebrations, 
              I bring the perfect soundtrack to your special moments.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Book Your Event
              </button>
              <button className="btn btn-outline" onClick={scrollToServices}>
                View Services
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="dj-console">
              <div className="console-body">
                <div className="turntable turntable-left">
                  <div className="vinyl">
                    <div className="vinyl-label">4CE</div>
                  </div>
                </div>
                <div className="mixer">
                  <div className="knob"></div>
                  <div className="knob"></div>
                  <div className="knob"></div>
                  <div className="slider"></div>
                  <div className="slider"></div>
                </div>
                <div className="turntable turntable-right">
                  <div className="vinyl">
                    <div className="vinyl-label">BEATS</div>
                  </div>
                </div>
              </div>
              <div className="equalizer">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero