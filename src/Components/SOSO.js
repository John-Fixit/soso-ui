import React from 'react'
import schoolLogo from "../Images/soso logo.png"
function SOSO() {
    return (
        <>
            <div className='navbar-light'>
                <div className='col-lg-11 col-md-12 mx-auto'>
                    <div className='row text-light p-3'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <div className='card h-100 border-0 navbar-light'>
                                <img src={schoolLogo} className='card-img-top w-50 card-image' />
                                <p className='card-text'>Oyo State School of Science Ogbomoso.</p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <div className='card h-100 navbar-light border-0'>
                                <b>Contact</b>
                                <ul className='mt-2'>
                                    <li>schoolemail@gmail.com</li>
                                    <li>Ogbomoso | contact</li>
                                    <li>Head office | contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <div className='card h-100 navbar-light border-0'>
                                <b>Address</b>
                                <ul className='mt-2'>
                                    <li>Oke Owode, Ogbomoso, Oyo state Nigeria</li>
                                </ul>
                            </div>
                        </div>
                <p className='text-center text-light mt-3'>© 2022 | School of Science Ogbomoso</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SOSO