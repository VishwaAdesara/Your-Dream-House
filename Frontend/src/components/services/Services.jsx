import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import './services.css'
const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        
        <h1 className="se">Our Services</h1>
        <div className='featured container'>
      <marquee className="m1">Welcome to our house selling and renting company. We offer a range of services to meet your real estate needs.</marquee>

      {/* Selling Services */}
      <section className="selling-services">
        <h2 className="h2c">Selling Services</h2>
        <ul>
          <li>
            <h3>Property Evaluation</h3>
            <p>We provide expert property evaluation to determine the optimal selling price for your home.</p>
          </li>
          <li>
            <h3>Marketing and Promotion</h3>
            <p>We create customized marketing strategies to ensure your property reaches the right buyers.</p>
          </li>
          <li>
            <h3>Negotiation Assistance</h3>
            <p>Our experienced team will assist you in negotiating the best deal for your property.</p>
          </li>
        </ul>
      </section>

      {/* Renting Services */}
      <section className="renting-services">
        <h2 className="h2c">Renting Services</h2>
        <ul>
          <li>
            <h3>Property Listings</h3>
            <p>We maintain an up-to-date database of available rental properties, making it easy to find your ideal home.</p>
          </li>
          <li>
            <h3>Tenant Screening</h3>
            <p>We conduct thorough tenant screenings to ensure reliable and responsible renters.</p>
          </li>
          <li>
            <h3>Lease Management</h3>
            <p>Our team handles lease agreements and ongoing management, so you can relax and enjoy your rental property.</p>
          </li>
        </ul>
      </section>
        </div>
      </section>
    </>
  )
}

export default Services
