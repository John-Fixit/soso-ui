import React from 'react'

function SchoolImageCarousel() {
    return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block bg-imgs text-light align-items-center d-flex" >
                            <div className='mx-auto card opacity-75 carousel-card'>
                                <h1 className='school_alias'>De la Science a l'astre</h1>
                                <p className='fw-bold fs-4 school_alias'>Oyo State School of Science Ogbomoso.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block bg-imgs text-light align-items-center d-flex">
                            <div className='mx-auto card opacity-75 carousel-card'>
                                <h1 className='school_alias'>SOSO Students in Practical Class</h1>
                                <p className='fw-bold fs-4 school_alias'>Oyo State School of Science Ogbomoso.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block bg-imgs text-light align-items-center d-flex">
                            <div className='mx-auto card opacity-75 carousel-card'>
                                <h1 className='school_alias'>Well equipped ICT Center</h1>
                                <h2 className='school_alias'>For Students and Teachers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block bg-imgs text-light align-items-center d-flex">
                            <div className='mx-auto card opacity-75 carousel-card'>
                                <h1 className='school_alias'>School Building</h1>
                                <p className='fw-bold fs-4 school_alias'>Oyo State School of Science Ogbomoso.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon navbar-light" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon navbar-light" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default SchoolImageCarousel