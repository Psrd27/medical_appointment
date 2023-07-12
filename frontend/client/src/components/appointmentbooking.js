import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
const DoctorAppointmentForm =() =>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [typeofcase, setCase] = useState('');
    const [description, setDesc] = useState('');
  
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = {
          name,
          number,
          email,
          typeofcase,
          description,
        };
    
        Axios.post('http://localhost:5000/appointments/add',formData)
        .then(res => console.log("Succesfully transmitted the data",res))
        .catch(err=> console.log("Error : "+err))
    
      window.alert("Appointment booked!");
  
      setName('');
      setNumber('');
      setEmail('');
      setCase('');
      setDesc('');
  
      
    };
  
  
    return (
        
        <div className='App'>
            <h1 id='heading'>Medical Appointment Booking</h1>
      <form method="POST" >
        <label>
          Name:
          <input className='input-box'
            type="text"
            value={name}
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile:
          <input className='input-box'
            type="text"
            value={number}
            placeholder='+91 ...'
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input className='input-box'
            type="email"
            value={email}
            placeholder='ex: xyz@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type of case:
          <input className='input-box'
            type="text"
            value={typeofcase}
            placeholder='Enter the case type here.'
            onChange={(e) => setCase(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input className='input-box'
            type="text"
            value={description}
            placeholder='Enter a brief description.'
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Book Appointment</button>
      </form>
      </div>
    );
}

export default DoctorAppointmentForm;