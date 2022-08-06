import React, {useState} from 'react'
import image from '../Images/soso logo.png'
function BoardofPrincipal() {

    return (
            <>
                <div className='col-12 mt-5'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-lg-4' data-aos="fade-up-right" data-duration="1000">
                                <img src={image} className="w-100" />
                                <h5 className='textColor text-center'>Principal Name (Principal)</h5>
                            </div>
                            <div className='col-lg-8 col-sm-12 mx-auto' data-aos="fade-up-left" data-duration="1000">
                                <h2 className='card-header textColor text-center'>From the Desk of Principal</h2>
                                <p className='mx-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default BoardofPrincipal