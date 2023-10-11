import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Review from "../Review/Review"
import Services from "../services/Services"
import Contact from "../contact/contact"
import SignUp from "../common/header/Signup"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Review' element={<Review />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
