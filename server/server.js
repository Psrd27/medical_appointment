const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;
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


app.get("/getAppointments",(req,res)=>{
  appointmentsModel.find({},(err,result)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }

  })
})
// Define API endpoint for saving appointments
app.post('/createAppointments', async (req, res) => {
  const appointment = req.body;
  const newAppointment = new appointmentsModel(appointment);
  await newAppointment.save();
  res.json(appointment);
    // .then(() => {
    //   res.status(200).json({ message: 'Appointment data saved successfully' });
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: 'An error occurred while saving the appointment data' });
    // });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
