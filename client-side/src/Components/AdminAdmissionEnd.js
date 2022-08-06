import React from 'react'

function AdminAdmissionEnd() {
    // const [first, setfirst] = useState(second)
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
                    <p className='mt-3'><b>NOTICE:</b> Please, read carefully all the instructions documented in this page for your admission processing.</p>
                <div className='button-group col-10 mx-auto mb-4 text-end'>
                        <button className='btn dropdownKey py-2 textColor fs-5'>Edit</button>
                        <button className='btn navbar-light py-2 text-light fs-5'>Save</button>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>ELIGIBILITY</p>
                        <textarea cols='10' rows='10' className="form-control" placeholder='Admission eligibility'></textarea>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>REQUIREMENT FOR THE ADMISSION</p>
                        <textarea cols='10' rows='10' className="form-control" placeholder='Admission requirement for the applicants'></textarea>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>ADMISSION BEGINS</p>
                        <p className=''>Admission begins when : <input type='text' className='p-2 shadow rounded-3 border border-secondary' placeholder='Admission begins when'/></p>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>ADMISSION CLOSES</p>
                        <p className=''>Admission Closes when : <input type='text' className='p-2 shadow rounded-3 border border-secondary' placeholder='Admission closes when'/></p>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>ADMISSION PAYMENT INFORMATION</p>
                        <textarea cols='10' rows='10' className="form-control" placeholder='admission payment information'></textarea>
                        <p className='text-muted'><i>Please follow the analization above for your payments! (warning to the applicants)</i></p>
                    </div>
                    <div className='px-3 my-3'>
                        <p className='fw-bolder text-muted'>REGISTRATION STEPS FOR THE ADMISSION</p>
                        <textarea cols='10' rows='10' className="form-control" placeholder='Steps for admission'></textarea>
                    </div>
                    <div className='button-group col-10 mx-auto mb-4'>
                        <button className='btn dropdownKey w-50 py-2 textColor fs-5'>Edit</button>
                        <button className='btn navbar-light w-50 py-2 text-light fs-5'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAdmissionEnd