import React from 'react';
import{ BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import DoctorAppointmentForm from './components/appointmentbooking.js';
import ListOfAppointments from './components/list.js';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route exact path="/" index element={<DoctorAppointmentForm/>}/>
        <Route exact path="/appointment" element={<ListOfAppointments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
