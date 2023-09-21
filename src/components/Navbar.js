import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setexpandNavbar] = useState(false)

    const location = useLocation()
    // a hook to get where your in the website like your route

    useEffect(() => {
        setexpandNavbar(false)
    }, [location])
    // whenever the location changes, that usestate will change
    return (
        // navbar should open if true, closed if false
        <div className='navbar' id={expandNavbar ? "open" : "close"}>

            <div className='toggleButton'>
                {/* here if false, it will become true, if true, it will become false */}
                <button onClick={() => { setexpandNavbar((prev) => !prev) }}> <ReorderIcon /></button>
            </div>

            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/contact"> Contact  </Link>

            </div>
        </div >
    );
}

export default Navbar;
