import img from "../images/pricing.jpg"
import Back from "../common/Back"
import React, { useState } from 'react'
import axios from 'axios';
import "./contact.css"

const Demo = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4001/api/contact', {
        username,
        email,
        subject,
        message,
      });
      alert('Contact details saved successfully.');
      setUsername('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
     catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred.');
    }
  };
 
return (
  <div >
  {/* <h1>Sign Up</h1> */}
  <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
  <h1 class="h11">Contact Us</h1>
  <div className="form-con">
    
  <form onSubmit={handleSignup}  class ="forms" method='post'>
  <label >Name</label>
   <input
      type="text"
      placeholder="Name"
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    
    <label >Email</label>
   <input
      type="email"
      placeholder="Email"
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <label>Subject</label>
    <select name="subject" onChange={(e)=>setSubject(e.target.value)}>

<option value="Buy" >Buy</option>

<option value="Sell" >Sell</option>

<option value="Rent" >Rent</option>

</select>

   

    <label>Message</label>
    <textarea
      placeholder="Subject"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    />

    
    <button type="submit" class="button">Submit</button>
  </form>
  </div>
</div>

)
}

export default Demo