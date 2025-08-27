import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3 onClick={scrollToTop}>DJ 4CE</h3>
              <p>Where Music Meets Magic</p>
            </div>
            <p className="footer-description">
              Professional DJ services for unforgettable events. From intimate gatherings 
              to grand celebrations, we bring the perfect soundtrack to your special moments.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
              <a href="#" className="social-link" aria-label="SoundCloud">
                <span>🎵</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Wedding DJ</a></li>
              <li><a href="#services">Corporate Events</a></li>
              <li><a href="#services">Private Parties</a></li>
              <li><a href="#services">Club Events</a></li>
              <li><a href="#services">Custom Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>dj4ce@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Greater Metro Area</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Get the latest updates on new services, special offers, and event tips!</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} DJ 4CE. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Booking Policy</a>
            </div>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <span>↑</span>
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="footer-pattern">
        <div className="pattern-note">♪</div>
        <div className="pattern-note">♫</div>
        <div className="pattern-note">♪</div>
        <div className="pattern-note">♫</div>
        <div className="pattern-note">♪</div>
      </div>
    </footer>
  )
}

export default Footer