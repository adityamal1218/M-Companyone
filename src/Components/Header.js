import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div id="header">
                <div id="logo">
                    <img src="https://www.nifafinearts.com/images/nifa-new-logo.png" alt="Logo" />
                </div>
                <div id="menu">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Courses">Courses</Link></li>
                        <li><Link to="/Activities">Activities</Link></li>
                        <li><Link to="/Admission">Admission</Link></li>
                        <li><Link to="/ArtGalkery">ArtGalkery</Link></li>
                        <li><Link to="/Franchise">Franchise</Link></li>
                        <li><Link to="/OnlineClasses">OnlineClasses</Link></li>
                        <li><Link to="/Video">Video</Link></li>
                        <li><Link to="/PayFree">PayFree</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>

                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default Header