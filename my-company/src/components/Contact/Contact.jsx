import React from 'react'
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div style={{textAlign: 'center'}} >
     <h2>Send Your Messages Below</h2>

     <form onSubmit ={handleSubmit}  style={{width: '100%'}}>

      <div style={{marginBottom:'20px'}}>
      <label htmlFor="name">Enter Your Name:</label><br />
      <input 
      type="text" 
      name="name"
      id="name"
      value={formData.name}
      onChange={handleChange}
      style={{width: '50%'}} 
      
      />
      </div>

      <div style={{marginBottom:'20px'}}>
      <label htmlFor="email">Enter Your Email:</label><br />
      <input
      type="text" 
      name="email" 
      id="email" 
      value={formData.email}
      onChange={handleChange}
      style={{width: '50%'}}
      />
      </div>

      <div style={{marginBottom:'20px'}}>
      <label htmlFor="textA">What would you like to tell us</label><br />
      <textarea 
      name="message"
      id='textA'
      value={formData.message}
      onChange={handleChange}
      style={{width: '50%', height:'100px'}}
      />
      </div>

 <button type='submit'>Send Message</button>
     </form>
    </div>
  )
}

export default Contact;
