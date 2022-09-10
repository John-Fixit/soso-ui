import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import schoolLogo from "../Images/soso logo.png"
import style from '../App.css'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top px-4 py-0">
                <div className="container-fluid">
                    <Link to="" className="navbar-brand text-light"><img src={schoolLogo} className='card-img-top schoolLogo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to="" className="nav-link text-light me-4" aria-current="page">About</Link>
                            </li>
                                    <li><Link to="/apply-for-admission" className="nav-link text-light me-4" >Admission</Link></li>
                                
                            <li className="nav-item dropdown">
                                <p className="nav-link text-light me-4 dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academics
                                </p>
                                <ul className="dropdown-menu mt-2 dropdownKey" aria-labelledby="navbarDropdown">
                                    <li><Link to="/school-structure" className="dropdown-item dropdownList" >Structure of the School</Link></li>
                                    <li><Link to="/school-curriculum" className="dropdown-item dropdownList" >Curriculum</Link></li>
                                    <li><Link to="/school-anthem" className="dropdown-item dropdownList" >School Anthems</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/award-distinction" className="nav-link active text-light me-4" aria-current="page" >Awards & Distiction</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link active text-light me-4" aria-current="page" >Gallery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar