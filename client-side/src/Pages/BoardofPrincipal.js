import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image from '../Images/user.PNG'
function BoardofPrincipal() {
const [principalInfo, setprincipalInfo] = useState([])
    useEffect(()=>{
        axios.get('https://oysoso.herokuapp.com/to-principal').then((res)=>{
            setprincipalInfo(()=>{return res.data.result})
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
            <>
                <div className='col-12 mt-5'>
                    <div className='col-lg-10 mx-auto'>
                        {
                            principalInfo.length ==1 ?
                            principalInfo.map((principal, index)=>(
                        <div className='row' key={index}>
                            <div className='col-lg-4 text-center' data-aos="fade-up-right" data-duration="1000">
                                <img src={ principal.principalImage!= '' ? principal.principalImage :image} className="w-100 principal_image" />

                                <h5 className='textColor text-center'>{principal.principalName} (Principal) </h5>

                            </div>
                            <div className='col-lg-8 col-sm-12 mx-auto' data-aos="fade-up-left" data-duration="1000">
                                <h2 className='card-header textColor text-center'>From the Desk of Principal</h2>
                                <p className='mx-3'>{principal.principalNote}
                                
                                </p>
                            </div>
                        </div> )): 
                        <div class="spinner-border textColor" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
}
                    </div>
                </div>
            </>
    )
}

export default BoardofPrincipal