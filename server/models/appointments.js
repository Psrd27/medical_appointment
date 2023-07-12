const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength:3,
    },
    number:{
        type: String,
        require:true,
        unique: true,
    
      },
    email: {
      type: String,
      required: true
    },
    typeofcase: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim:true,
    },
  });

const appointmentsModel = mongoose.model("appointments",appointmentSchema)
module.exports = appointmentsModel;