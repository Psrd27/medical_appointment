import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../App.css';


const ListOfAppointments = ()=>{
    
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try{
            const response= await axios.get('http://localhost:5000/appointments/')
            console.log(response)
            setData(response.data);
        }catch(error){console.log(error)}
    };
    useEffect(()=>{
        fetchData();
    },[]);
     
   return (
    
    <div>
        <h3 style={{ color:'#555',display:'flex', justifyContent:'center'}}>List of Appointments </h3>
        <hr></hr>
      {data.map(item => (
        <div Name={item.id}>
          <p id='paragh'>Name : {item.name}<br/>
          Number : {item.number}<br/>
          Type of case : {item.typeofcase}</p>
          <hr></hr>
        </div>
      ))}
    </div>
   );
};

export default ListOfAppointments;