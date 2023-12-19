import React, { useEffect, useState } from 'react'
import axios from 'axios'
function OurAdmission() {
    const admissionURI = `${process.env.REACT_APP_SERVER_BASE_URL}/admissionReq`
    const [admissionDetails, setadmissionDetails] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(()=>{
        axios.get(admissionURI).then((res) => {
            if(res.data.status){
                setisLoading(res.data.status)
                setadmissionDetails(()=>{return res.data.result})
            }
            else{
                setisLoading(res.data.status)
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    return (
        <>
            <div className='col-12 cont_fluid'>
                <div className='admission-img text-center text-light py-3 align-items-center d-flex'>
                    <div className='col-lg-7 mx-auto col-ms-12'>
                        <p className='fw-bolder fs-1 text-break'>Admission! Admission!! Admission!!!</p>
                        <p className='fw-bolder fs-2 '>Apply for Admission into School of Science Ogbomoso (SOSO).</p>
                    </div>
                </div>
                <h2 className='text-center card-header border-0'>Admission into Senior Secondary School One(SSS 1)</h2>
                <div className='col-12 all_equal'>
                    <p><b>NOTICE:</b> Please, read carefully all the instructions documented in this page for your admission processing.</p>
                    {
                        isLoading?
                    <div >
                        {
                            admissionDetails.map((admission, index)=>{
                                return (
                                    <div key={index}>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>ELIGIBILITY</p>
                                            <p className=''>{admission.admissionEli}</p>
                                        </div>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>REQUIREMENT FOR THE ADMISSION</p>
                                            <p className=''>{admission.admissionReq}</p>
                                        </div>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>ADMISSION BEGINS</p>
                                            <p className=''>Admission begins when : {admission.admissionBegins}</p>
                                        </div>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>ADMISSION CLOSES</p>
                                            <p className=''>Admission Closes when : {admission.admissionCloses}</p>
                                        </div>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>PAYMENT INFORMATION</p>
                                            <p className=''>{admission.admissionPaymentInfo}</p>
                                            <p className='text-muted'><i>Please follow the analization above for your payments!</i></p>
                                        </div>
                                        <div className='px-3'>
                                            <p className='fw-bolder text-muted'>REGISTRATION STEPS FOR THE ADMISSION</p>
                                            <p className=''>{admission.admissionReg}</p>
                                        </div>
                        </div>
                                    )
                            })
                        }
                        
                    </div>: 
                    <div className='text-center'>
                    <div class="spinner-border border-1 textColor mx-auto" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
}
                </div>
            </div>
        </>
    )
}

export default OurAdmission