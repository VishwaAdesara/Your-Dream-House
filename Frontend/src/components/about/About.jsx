import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

           <p> Once upon a time in the bustling world of real estate, 
            there existed an agency like no other – HomeSeeker. 
            In the age of digital convenience, HomeSeeker had set out to revolutionize the way people found their dream homes through a cutting-edge rent home app.</p>

<p>The story began with Emily, a young professional, tired of the never-ending cycle of scrolling through countless listings, attending countless viewings, and dealing with countless agents who never quite understood what she was looking for. She longed for a simpler, more personalized way to find her perfect haven.</p>

<p>One day, while browsing the app store, Emily stumbled upon the HomeSeeker app. Intrigued by its promising reviews and sleek interface, she decided to give it a try. Little did she know that this decision would change her life.</p>

<p>Upon opening the app, Emily was greeted by a friendly virtual assistant named "Seeker." Seeker quickly became her trusted companion on this journey. With a few taps, Emily created her profile and began to describe her ideal home. Seeker, armed with advanced AI algorithms, started suggesting listings tailored to her preferences.</p>


<p>Word of Emily's success with HomeSeeker quickly spread among her friends and colleagues. The app became the go-to choice for anyone in search of their ideal rental property. The team at HomeSeeker continued to innovate, adding features like smart home integration and neighborhood insights, ensuring that they remained at the forefront of the real estate industry.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
