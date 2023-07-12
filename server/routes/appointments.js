const router=require('express').Router();
let Appointment=require('../models/appointments');

router.route('/').get((req,res)=>{
    Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error : '+err));
});

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const typeofcase=req.body.typeofcase;
    const description=req.body.description;

    const newAppointment= new Appointment({
        name,
        number,
        email,
        typeofcase,
        description,
    });

    newAppointment.save()
    .then(() => res.json('Appointment Booked!'))
    .catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;