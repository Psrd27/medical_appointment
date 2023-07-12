import React from 'react';
import{ Link } from 'react-router-dom';

function Navbar(){

        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <Link to="/" className='navbar-brand'>KPR E-Meds</Link>
                <div className='collapse navbar-collapse'>
                    <ul className="navbar-nav mr-auto">
                        <li className='navbar-item'></li>
                        <Link to="/appointment" className='nav-link'>Appointments</Link>
                    </ul>
                </div>
            </nav>
        )
}
export default Navbar;