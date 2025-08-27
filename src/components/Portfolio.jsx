import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const portfolioItems = [
    {
      id: 1,
      title: "Sarah & Mike's Wedding",
      category: "wedding",
      venue: "Grand Ballroom Hotel",
      date: "June 2024",
      guests: "150 guests",
      description: "A magical evening with classic hits and romantic ballads. The couple wanted a mix of 80s classics and modern pop for their special day.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
      tags: ["Wedding", "150+ Guests", "Mixed Genre"]
    },
    {
      id: 2,
      title: "TechCorp Annual Gala",
      category: "corporate",
      venue: "Convention Center",
      date: "May 2024",
      guests: "300 guests",
      description: "Professional corporate event with sophisticated background music during dinner and energetic dance music later in the evening.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
      tags: ["Corporate", "300+ Guests", "Professional"]
    },
    {
      id: 3,
      title: "Summer Beach Party",
      category: "party",
      venue: "Oceanview Resort",
      date: "August 2024",
      guests: "200 guests",
      description: "High-energy beach party with tropical vibes, reggae, and dance music. Perfect summer celebration with stunning ocean views.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80",
      tags: ["Beach Party", "200+ Guests", "Summer Vibes"]
    },
    {
      id: 4,
      title: "Emma's Sweet 16",
      category: "private",
      venue: "Private Residence",
      date: "July 2024",
      guests: "50 guests",
      description: "Intimate birthday celebration with current pop hits and teen favorites. Created the perfect atmosphere for a memorable sweet 16.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80",
      tags: ["Birthday", "Teen Party", "Pop Music"]
    },
    {
      id: 5,
      title: "Charity Fundraiser Gala",
      category: "corporate",
      venue: "City Hall",
      date: "April 2024",
      guests: "400 guests",
      description: "Elegant charity event requiring sophisticated sound management for speeches and auctions, followed by classy dance music.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80",
      tags: ["Charity Event", "400+ Guests", "Elegant"]
    },
    {
      id: 6,
      title: "Club Nexus Grand Opening",
      category: "party",
      venue: "Club Nexus",
      date: "March 2024",
      guests: "500 guests",
      description: "High-energy club opening with EDM, house music, and crowd favorites. Multiple DJ sets throughout the night.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80",
      tags: ["Club Opening", "500+ Guests", "EDM"]
    }
  ]

  const filters = [
    { key: 'all', label: 'All Events' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'party', label: 'Parties' },
    { key: 'private', label: 'Private Events' }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding Reception",
      rating: 5,
      text: "DJ 4CE made our wedding absolutely perfect! The music selection was spot-on and he kept everyone dancing all night. Highly professional and responsive to our requests."
    },
    {
      name: "Mark Peterson",
      event: "Corporate Event",
      rating: 5,
      text: "Outstanding professional service for our company gala. Perfect volume control during dinner and great energy for the after-party. Will definitely book again!"
    },
    {
      name: "Lisa Chen",
      event: "Birthday Party",
      rating: 5,
      text: "Amazing DJ service for my daughter's sweet 16! He really understood what the kids wanted and created such a fun atmosphere. Everyone had a blast!"
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Event Portfolio</h2>
        <p className="section-subtitle">
          Explore our recent events and see how we create unforgettable experiences. 
          From intimate gatherings to grand celebrations, every event tells a unique story.
        </p>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="portfolio-item"
              onClick={() => setSelectedEvent(item)}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{item.title}</h3>
                    <p>{item.venue}</p>
                    <span className="view-details">View Details</span>
                  </div>
                </div>
              </div>
              <div className="portfolio-meta">
                <div className="portfolio-tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <p className="portfolio-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedEvent(null)}
              >
                ×
              </button>
              <div className="modal-image">
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedEvent.title}</h3>
                <div className="modal-details">
                  <p><strong>Venue:</strong> {selectedEvent.venue}</p>
                  <p><strong>Date:</strong> {selectedEvent.date}</p>
                  <p><strong>Guests:</strong> {selectedEvent.guests}</p>
                </div>
                <p className="modal-description">{selectedEvent.description}</p>
                <div className="modal-tags">
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">What Clients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="portfolio-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Events Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Guests</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio