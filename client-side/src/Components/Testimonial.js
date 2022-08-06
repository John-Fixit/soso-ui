import React, { useState } from 'react'

function Testimonial() {

    return (
        <>
            <div className='text-center mt-5'>
                <h1 className='textColor'>Testimonials</h1>
                <p className='fw-bold'>View our Parents and Students comment about Schoool of Science Ogbomoso.</p>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='row'>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row'>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row'>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-4'>
                                    <div className='card h-100 p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, querat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Testimonial