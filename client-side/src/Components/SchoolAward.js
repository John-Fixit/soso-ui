import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
function SchoolAward() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    const getAwardUri = 'http://localhost:4000/getaward'
    const [awards, setawards] = useState([])
    useEffect(() => {
        axios.get(getAwardUri).then((res) => {
            setawards(() => { return res.data.awards })
        })
    }, [])

    return (
        <div className='col-12 cont_fluid noOverflow'>
            <p className='col-12 navbar-ligh opacity-75 text-ligh textColor py-3 text-center fs-2 ' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">Awards & Distinctions</p>
            <div className='col-9 mx-auto text-muted gy-5 text-center'>
                {
                    !awards.length < 1 ? awards.map(() => (
                        <p className='text-center border-bottom py-3 textColor fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
                    )) :
                        <div className="spinner-border textColor" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                }
                <p className='text-center border-bottom py-3 textColor fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
                <p className='text-center border-bottom py-3 textColor fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>

                <footer>
                    <p className='text-center shadow dropdownKey rounded-pill py-3' data-aos="fade-up-right" data-aos-duration="2000">Oyo State School of Science Ogbomoso</p>
                </footer>
            </div>
        </div>
    )
}

export default SchoolAward