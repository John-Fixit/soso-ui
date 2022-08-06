import React from 'react'
import img from '../Images/IMG-20220731-WA0010.jpg'
import { MdAlarm } from "react-icons/md";
function Schoolprogram() {
    return (
        <>
            <div className='col-12 mt-3'>
                <div className='row'>
                    <div className='col-lg-6 program-img'>
                        <img src={img} className='w-100' />
                    </div>
                    <div className='col-lg-6 col-md-12 text-center mt-4 program-note'>
                            <h3 className='textColor'>SOSO Program Offered</h3>
                            <div className='text-start row mt-4'>
                                <div className='col-2 text-warning '>
                                    <MdAlarm size='10vh' />
                                </div>
                                <div className='col-9 text-center'>
                                    <b className='textColor opacity-50'>Oyo State School of Science </b>
                                    <p className='px-2 pt-3 text-start program-note'>
                                        Advance the knowledge that will make students critical thinkers and self-directed learners prepared to serve the Nation as leading scientists and technologists in educational researches.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schoolprogram