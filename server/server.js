const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Medical_Appointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define appointment schema
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  typeofcase: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Parse JSON request bodies
app.use(express.json());

// Define API endpoint for saving appointments
app.post('/api/appointments', (req, res) => {
  const { name, email, typeofcase, description } = req.body;

  const newAppointment = new Appointment({
    name,
    email,
    typeofcase,
    description
  });

  newAppointment.save()
    .then(() => {
      res.status(200).json({ message: 'Appointment data saved successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'An error occurred while saving the appointment data' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
