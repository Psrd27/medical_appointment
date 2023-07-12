const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const appointmentsModel = require('./models/appointments');

app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose.connect('mongodb+srv://Psrd27:mongodb007!@appointments.ubn2zwp.mongodb.net/KPR_E-Med?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



const appointmentRouter =require('./routes/appointments');
app.use('/appointments',appointmentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
