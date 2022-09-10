import React, { useEffect } from 'react'
import style from '../App.css'
import SchoolImageCarousel from '../Pages/SchoolImageCarousel'
import Schoolprogram from '../Pages/Schoolprogram'
import Goal from './Goal'
import Testimonial from './Testimonial'
import WhySOSO from './WhySOSO'
import AOS from 'aos'
import 'aos/dist/aos.css'
import EditPrincipal from '../Pages/EditPrincipal'
function AdminHome() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
            <div className='col-12 cont_fluid noOverflow'>
                <SchoolImageCarousel />
                <EditPrincipal />
            </div>
    )
}

export default AdminHome