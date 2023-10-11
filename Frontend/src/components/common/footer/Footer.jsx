import React from "react"
import { footer } from "../../data/Data"
import  { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const [email, setEmail] = useState(""); // State for email input
  const handleClick =()=>{
    if(!email)
    {
      alert("Enter your mail id")
    }
    else{
      alert("Subscription added")
    }
  } 
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact">
              <button className="bt">Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
              <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Handle input value change
                  name='email'
                  placeholder='Email Address'
                />
                <button onClick={handleClick} className="b1">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  )
}

export default Footer
