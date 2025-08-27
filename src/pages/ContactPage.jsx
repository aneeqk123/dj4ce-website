import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    guests: '',
    budget: '',
    services: [],
    addOns: [],
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      const array = name === 'services' ? formData.services : formData.addOns
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...array, value]
          : array.filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">🎉</div>
            <h2>Booking Request Sent!</h2>
            <p>Thank you for your interest! We'll get back to you within 24 hours to discuss your event details.</p>
            <button 
              className="btn" 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  eventType: '',
                  eventDate: '',
                  eventTime: '',
                  venue: '',
                  guests: '',
                  budget: '',
                  services: [],
                  addOns: [],
                  message: ''
                })
              }}
            >
              Send Another Request
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>Ready to make your event unforgettable? Let's discuss your perfect DJ experience.</p>
        </div>

        <div className="contact-main">
          <div className="contact-info-section">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <strong>Phone</strong>
                    <p>07305043107</p>
                    <small>Available 9 AM - 10 PM daily</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <strong>Email</strong>
                    <p>dj4ce@outlook.com</p>
                    <small>Response within 24 hours</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <strong>Service Area</strong>
                    <p>London & Surrounding Areas</p>
                    <small>Travel available for special events</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🎵</div>
                  <div className="contact-details">
                    <strong>Specialties</strong>
                    <p>Weddings, Corporate Events, Parties</p>
                    <small>All music genres and events</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <h3>Availability</h3>
              <div className="availability-info">
                <div className="availability-item">
                  <strong>Peak Season</strong>
                  <p>Book 3-6 months in advance for summer weddings and holiday parties</p>
                </div>
                <div className="availability-item">
                  <strong>Regular Bookings</strong>
                  <p>2-4 weeks notice preferred for optimal preparation</p>
                </div>
                <div className="availability-item">
                  <strong>Last Minute</strong>
                  <p>Emergency bookings may be available - call to check</p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
              <h3>Event Booking Form</h3>
              
              <div className="form-section">
                <h4>Personal Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>Event Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventType">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="nightclub">Nightclub Event</option>
                      <option value="festival">Festival</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Expected Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                    >
                      <option value="">Select guest count</option>
                      <option value="1-50">1-50 guests</option>
                      <option value="51-100">51-100 guests</option>
                      <option value="101-200">101-200 guests</option>
                      <option value="201-500">201-500 guests</option>
                      <option value="500+">500+ guests</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date *</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventTime">Event Time</label>
                    <input
                      type="time"
                      id="eventTime"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="venue">Venue/Location</label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    placeholder="Event venue or location"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under £500</option>
                    <option value="500-1000">£500 - £1,000</option>
                    <option value="1000-2000">£1,000 - £2,000</option>
                    <option value="2000-5000">£2,000 - £5,000</option>
                    <option value="5000+">£5,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h4>Services Required</h4>
                <div className="checkbox-group">
                  {['Basic Package', 'Premium Package', 'Deluxe Package', 'Ultimate Package'].map(service => (
                    <label key={service} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <h4>Additional Services</h4>
                <div className="checkbox-group">
                  {['Lighting Effects', 'Photo Booth', 'Live Streaming', 'Extra Hours', 'MC Services', 'Custom Playlist'].map(addon => (
                    <label key={addon} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="addOns"
                        value={addon}
                        checked={formData.addOns.includes(addon)}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      {addon}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us more about your event, music preferences, special requests, or any questions you have..."
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting && <div className="spinner"></div>}
                {isSubmitting ? 'Sending...' : 'Send Booking Request'}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Need Immediate Assistance?</h3>
          <p>For urgent bookings or quick questions, give us a call!</p>
          <div className="cta-buttons">
            <a href="tel:07305043107" className="btn">Call Now: 07305043107</a>
            <a href="mailto:dj4ce@outlook.com" className="btn btn-outline">Email Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage