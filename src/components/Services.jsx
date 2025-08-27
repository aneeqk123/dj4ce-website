import React, { useState } from 'react'
import './Services.css'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Wedding DJ Package",
      subtitle: "Your Perfect Day Soundtrack",
      price: "$800 - $1,500",
      duration: "6-8 hours",
      features: [
        "Ceremony & Reception Music",
        "Professional Sound System",
        "Wireless Microphones",
        "Custom Playlist Creation",
        "MC Services",
        "First Dance Coordination",
        "Background Music During Dinner",
        "Dance Floor Lighting",
        "Backup Equipment"
      ],
      popular: true,
      icon: "💒"
    },
    {
      title: "Corporate Event DJ",
      subtitle: "Professional Business Events",
      price: "$500 - $1,200",
      duration: "4-6 hours",
      features: [
        "Professional Presentation Setup",
        "Microphone & PA System",
        "Background Music",
        "Award Ceremony Support",
        "Custom Announcements",
        "Professional Attire",
        "Sound Engineering",
        "Equipment Setup/Breakdown",
        "Volume Control Management"
      ],
      popular: false,
      icon: "🏢"
    },
    {
      title: "Party & Club Events",
      subtitle: "High-Energy Entertainment",
      price: "$400 - $1,000",
      duration: "3-5 hours",
      features: [
        "High-Energy Music Selection",
        "Professional DJ Mixing",
        "Club-Quality Sound System",
        "LED Light Show",
        "Fog Machine Effects",
        "Live Music Mixing",
        "Crowd Interaction",
        "Social Media Integration",
        "Custom Music Requests"
      ],
      popular: false,
      icon: "🎉"
    },
    {
      title: "Private Parties",
      subtitle: "Intimate Celebrations",
      price: "$300 - $800",
      duration: "2-4 hours",
      features: [
        "Personalized Music Selection",
        "Compact Sound Setup",
        "Wireless Connectivity",
        "Guest Music Requests",
        "Volume-Appropriate Mixing",
        "Easy Setup & Cleanup",
        "Flexible Playlist",
        "Interactive DJ Services",
        "Party Game Coordination"
      ],
      popular: false,
      icon: "🎊"
    }
  ]

  const addOns = [
    {
      name: "Additional Hour",
      price: "$150/hour",
      description: "Extend your event coverage"
    },
    {
      name: "Photo Booth",
      price: "$300",
      description: "Professional photo booth with props"
    },
    {
      name: "Uplighting Package",
      price: "$200",
      description: "Ambient room lighting in your colors"
    },
    {
      name: "Live Streaming",
      price: "$250",
      description: "Stream your event live online"
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">DJ Services & Packages</h2>
        <p className="section-subtitle">
          Professional DJ services tailored to your event type and budget. 
          Choose from our comprehensive packages or customize your own experience.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${activeService === index ? 'active' : ''} ${service.popular ? 'popular' : ''}`}
              onClick={() => setActiveService(index)}
            >
              {service.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <div className="service-pricing">
                <div className="price">{service.price}</div>
                <div className="duration">{service.duration}</div>
              </div>

              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn service-btn">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="add-ons-section">
          <h3 className="add-ons-title">Additional Services</h3>
          <div className="add-ons-grid">
            {addOns.map((addon, index) => (
              <div key={index} className="addon-card">
                <div className="addon-header">
                  <h4>{addon.name}</h4>
                  <span className="addon-price">{addon.price}</span>
                </div>
                <p className="addon-description">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="equipment-specs">
          <h3 className="specs-title">Professional Equipment Specifications</h3>
          <div className="specs-grid">
            <div className="spec-category">
              <h4>Audio Equipment</h4>
              <ul>
                <li>Professional Pioneer DJ Controllers</li>
                <li>High-End Serato DJ Software</li>
                <li>QSC K12.2 Powered Speakers</li>
                <li>Shure Wireless Microphone Systems</li>
                <li>Professional Audio Mixing Console</li>
              </ul>
            </div>
            <div className="spec-category">
              <h4>Lighting & Effects</h4>
              <ul>
                <li>LED Par Can Uplighting</li>
                <li>Moving Head Spot Lights</li>
                <li>Fog Machine with Timer Control</li>
                <li>Laser Light Projectors</li>
                <li>Strobe Lights for Dance Floor</li>
              </ul>
            </div>
            <div className="spec-category">
              <h4>Additional Features</h4>
              <ul>
                <li>Backup Equipment for All Events</li>
                <li>Professional Cable Management</li>
                <li>Power Distribution Systems</li>
                <li>Event Coordination Software</li>
                <li>Mobile DJ Booth Setup</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="consultation-cta">
          <div className="cta-content">
            <h3>Need a Custom Package?</h3>
            <p>Every event is unique. Let's discuss your specific requirements and create a personalized DJ package that fits your vision and budget perfectly.</p>
            <button className="btn btn-outline">Schedule Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services