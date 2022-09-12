import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function SchoolStructure() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <>
            <div className='col-12 cont_fluid'>
                <p className='col-12 navbar-ligh opacity-75 text-ligh textColor py-3 text-center fs-2 ' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">Structure of the School</p>
                <div className='col-9 mx-auto text-muted gy-5'>
                    <p className='text-muted'>Students at SOSO are expected to offer all subjects in SS1 and SS2. However, the number of subjects in the final SS3 is reduced to a minimum of 8 and maximum of 9.</p>
                    <p data-aos="zoom-in">Traditionally, students in the Senior Secondary classes, Science department will offer science subjects such as Chemistry, Biology, Physics Et.c. As requires all students in  the Science school were to offer the general compulsory subjects, and then includes the science courses”.</p>
                    <p data-aos="zoom-in">They includes the following:</p>
                    <ul data-aos= "zoom-in">
                        <li>Mathematics</li>
                        <li>English Language</li>
                        <li>Yoruba</li>
                        <li>Civic Education</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Physics</li>
                    </ul>
                    <p data-aos= "zoom-in">In addition to the above, students are to choose from the following elective subjects listed below based on their area of specialized fields:</p>
                    <ul data-aos= "zoom-in">
                        <li>Computer / Data Processing</li>
                        <li>Economics</li>
                        <li>Agricultural science</li>
                        <li>Animal Husbandry</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SchoolStructure