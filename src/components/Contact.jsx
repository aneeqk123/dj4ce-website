import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    guests: '',
    duration: '',
    musicPreferences: '',
    specialRequests: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Club Event',
    'Private Party',
    'Graduation',
    'Holiday Party',
    'Other'
  ]

  const budgetRanges = [
    '$300 - $500',
    '$500 - $800',
    '$800 - $1,200',
    '$1,200 - $1,500',
    '$1,500+'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          eventTime: '',
          venue: '',
          guests: '',
          duration: '',
          musicPreferences: '',
          specialRequests: '',
          budget: ''
        })
      }, 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Book Your Event</h2>
        <p className="section-subtitle">
          Ready to make your event unforgettable? Fill out the form below and let's discuss 
          how we can create the perfect musical experience for your special occasion.
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <strong>Phone</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <strong>Email</strong>
                    <p>dj4ce@example.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <strong>Service Area</strong>
                    <p>Greater Metro Area<br />50-mile radius</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-details">
                    <strong>Response Time</strong>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="availability-card">
              <h3>Availability</h3>
              <div className="availability-info">
                <div className="availability-item">
                  <strong>Peak Season</strong>
                  <p>May - October<br />Book 3-6 months ahead</p>
                </div>
                <div className="availability-item">
                  <strong>Off Season</strong>
                  <p>November - April<br />More flexible scheduling</p>
                </div>
                <div className="availability-item">
                  <strong>Weekend Events</strong>
                  <p>Friday - Sunday<br />Premium pricing applies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form-container">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Booking Request Submitted!</h3>
                <p>Thank you for your interest! I'll get back to you within 24 hours with a custom quote and availability confirmation.</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Event Booking Form</h3>
                
                {/* Personal Information */}
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
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                    />
                  </div>
                </div>

                {/* Event Details */}
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
                        <option value="">Select Event Type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests *</label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        min="1"
                        required
                      />
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
                      <label htmlFor="eventTime">Start Time *</label>
                      <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="venue">Venue *</label>
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        placeholder="Venue name and address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="duration">Event Duration *</label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="2-3 hours">2-3 hours</option>
                        <option value="4-5 hours">4-5 hours</option>
                        <option value="6-7 hours">6-7 hours</option>
                        <option value="8+ hours">8+ hours</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Music & Budget */}
                <div className="form-section">
                  <h4>Music & Budget</h4>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="musicPreferences">Music Preferences</label>
                    <textarea
                      id="musicPreferences"
                      name="musicPreferences"
                      value={formData.musicPreferences}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Tell us about your music preferences, favorite genres, must-play songs, or songs to avoid..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Any special requests, announcements, or additional services needed?"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How far in advance should I book?</h4>
              <p>For peak season (May-October), I recommend booking 3-6 months in advance. For off-season events, 4-8 weeks is usually sufficient.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide equipment?</h4>
              <p>Yes! All professional sound equipment, microphones, and lighting are included. I also bring backup equipment to ensure your event runs smoothly.</p>
            </div>
            <div className="faq-item">
              <h4>Can you handle music requests during the event?</h4>
              <p>Absolutely! I encourage guest requests and will do my best to accommodate them while maintaining the overall vibe of your event.</p>
            </div>
            <div className="faq-item">
              <h4>What's your cancellation policy?</h4>
              <p>Cancellations 30+ days before the event receive a full refund. 14-29 days: 50% refund. Less than 14 days: no refund due to lost booking opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact