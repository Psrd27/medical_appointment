import React, { useState } from 'react';
import './App.css';
const DoctorAppointmentForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setCase] = useState('');
  const [time, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        name,
        number,
        email,
        date,
        time
      };
  
      // Send the form data to the backend using an API call
      fetch('../server/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Appointment data saved successfully:', data);
          window.alert('Appointment booked successfully!');
        })
        .catch((error) => {
          console.error('An error occurred while saving the appointment data:', error);
        });
    
    console.log(formData.name);

    window.alert("Appointment booked!");

    // Reset form fields
    setName('');
    setNumber('');
    setEmail('');
    setCase('');
    setDesc('');

    
  };


  return (
    <form onSubmit={handleSubmit} method="POST">
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
          value={date}
          placeholder='Enter the case type here.'
          onChange={(e) => setCase(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input className='input-box'
          type="text"
          value={time}
          placeholder='Enter a brief description.'
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default DoctorAppointmentForm;