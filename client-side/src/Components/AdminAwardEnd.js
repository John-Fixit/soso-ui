import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
function AdminAwardEnd() {
    const postAwardURI = 'http://localhost:4000/award'
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    const [awardText, setawardText] = useState('')
    const [isGoing, setisGoing] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [message, setmessage] = useState('')
    const [status, setstatus] = useState(false)
    const saveAward = () => {
        setisGoing(true)
        axios.post(postAwardURI, { awardText }).then((res) => {
            setisLoading(false)
            setawardText('')
            setmessage(res.data.message)
            setstatus(res.data.status)
            setisGoing(false)
        })
    }
    return (
        <div className='col-12 cont_fluid'>
            <p className='col-12 navbar-ligh opacity-75 text-ligh textColor py-3 text-center fs-2 ' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">Add New Awards & Distinctions</p>
            <div className='col-lg-9 mx-auto text-muted gy-5 col-sm-12 px-2'>
                <p className='text-center'><b>Format:</b>Date, Event,location and Award</p>
                {
                    isLoading ? '' :
                        status ? <p className="alert alert-success text-center">{message}</p> : <p className="alert alert-danger text-center">{message}</p>
                }
                <div className='py-2'>
                    <textarea className='form-control' cols='10' rows='10' onChange={(e) => setawardText(e.target.value)} value={awardText}></textarea>
                    <button className='btn navbar-light px-4 py-2 mt-3 text-light fs-5' onClick={saveAward}>{isGoing ? <div className="spinner-border text-light opacity-50" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : <span>Save</span>}</button>
                </div>
                <footer className='mt-3'>
                    <p className='text-center shadow dropdownKey rounded-pill py-3' data-aos="fade-up-right" data-aos-duration="2000">Oyo State School of Science Ogbomoso</p>
                </footer>
            </div>
        </div>
    )
}

export default AdminAwardEnd