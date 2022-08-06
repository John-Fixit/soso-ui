import React, { useEffect } from 'react'
import style from '../App.css'
import BoardofPrincipal from '../Pages/BoardofPrincipal'
import SchoolImageCarousel from '../Pages/SchoolImageCarousel'
import Schoolprogram from '../Pages/Schoolprogram'
import Goal from './Goal'
import Testimonial from './Testimonial'
import WhySOSO from './WhySOSO'
import AOS from 'aos'
import 'aos/dist/aos.css'
function About() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
            <div className='col-12 cont_fluid noOverflow'>
                <SchoolImageCarousel />
                <BoardofPrincipal />
                <Schoolprogram />
                <div className='container-fluid all_equal'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-12 col-md-6 mt-3' data-aos="zoom-in">
                            <div className='card navbar-light text-center p-3 text-light h-100 shadow'>
                                <p className="card-title fw-bold fs-3">
                                    Over 20 years of excellence
                                </p>
                                <p >since her inception in 1997,SOSO have been at the forefront of providing reliable Students and has been one of the respected schools in ogbomoso.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-6 mt-3' data-aos="fade-up">
                            <div className='card bg-warnin text-center p-3 text-ligh h-100 shadow' style={{ color: 'brown', border: '2px solid brown' }}>
                                <p className="card-title fw-bold fs-3">
                                    Over Thousands of graduates of SOSO
                                </p>
                                <p >SOSO has graduated and certified over 5000 students who are doing well in various places across the globe</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-6 mt-3' data-aos="zoom-out" >
                            <div className='card navbar-light text-center p-3 text-light h-100 shadow'>
                                <p className="card-title fw-bold fs-3">
                                    Best School Indeed!
                                </p>
                                <p >Enjoy sound teaching, guidance and discipline. Our principal installs discipline and demands the best from all his schools. 99.999% of our student fonder their education by going to different higher institutions both in Nigeria and aboard.</p>
                            </div>
                        </div>
                    </div>
                    <Goal />
                    <WhySOSO />

                    <div className='col-12'>
                        <Testimonial />
                    </div>
                </div>
                <div className='bg-img3 text-center text-light align-items-center d-flex'>
                    <div className='mx-auto' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" 
                        >
                        <p className='fw-bolder fs- text-break' style={{ fontSize: '5vh' }} >READY TO MAKE A CHANGE?</p>
                        <p>We  provide and lead students in quality education, service, industry and character as well as discipline</p>
                    </div>
                </div>
            </div>
    )
}

export default About