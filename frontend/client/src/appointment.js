import React, { useState } from 'react';
import './App.css';
const DoctorAppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setCase] = useState('');
  const [time, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        name,
        email,
        date,
        time
      };
  
      // Send the form data to the backend using an API call
      fetch('/server/models/doctorappointment', {
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

    // Reset form fields
    setName('');
    setEmail('');
    setCase('');
    setDesc('');

    
  };

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Type of case:
        <input
          type="text"
          value={date}
          onChange={(e) => setCase(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={time}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default DoctorAppointmentForm;