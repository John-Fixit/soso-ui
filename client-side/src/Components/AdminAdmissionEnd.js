import React, { useState, useEffect } from "react";
import axios from 'axios'
function AdminAdmissionEnd() {
  const admissionURI = 'https://oysoso.herokuapp.com/admissionReq'
  const [admissionEli, setadmissionEli] = useState("");
  const [admissionReq, setadmissionReq] = useState("")
  const [admissionBegins, setadmissionBegins] = useState("")
  const [admissionCloses, setadmissionCloses] = useState("")
  const [admissionPaymentInfo, setadmissionPaymentInfo] = useState("")
  const [admissionRegStep, setadmissionRegStep] = useState("")
  const [editBtn, seteditBtn] = useState("Edit")
  const [disable, setdisable] = useState(true);
  const [isLoading, setisLoading] = useState(true)
  const [isGoing, setisGoing] = useState(false)
  const [message, setmessage] = useState('')
  const [status, setstatus] = useState()
  const [admissionDetails, setadmissionDetails] = useState([])

  useEffect(()=>{
    axios.get(admissionURI).then((res) => {
        if(res.data.status){
            setisLoading(res.data.status)
            setadmissionDetails(()=>{return res.data.result})
            res.data.result.map((adm)=>{
             setadmissionEli(adm.admissionEli)
             setadmissionReq(adm.admissionReq)
             setadmissionRegStep(adm.admissionRegStep)
             setadmissionBegins(adm.admissionBegins)
             setadmissionCloses(adm.admissionCloses)
             setadmissionPaymentInfo(adm.admissionPaymentInfo)
            })
        }
        else{
            setisLoading(res.data.status)
        }
    }).catch((err) => {
        console.log(err);
    });
}, [])
  const editAll = () => {
    if(editBtn=="Edit"){
        seteditBtn("Disable")
        setdisable(false);
    }
    else{
        seteditBtn("Edit")
        setdisable(true);
    }
  };
  const saveChange = () => {
    const data = {admissionEli, admissionBegins, admissionCloses, admissionPaymentInfo, admissionRegStep, admissionReq};
    setisGoing(true)
  axios.post('https://oysoso.herokuapp.com/admission', (data)).then((res)=>{
    setisLoading(false)
    setisGoing(false)
    if(res.data.status){
        setdisable(true)
    }
    setmessage(res.data.message)
    setstatus(res.data.status)
  })
    
  };
  return (
    <>
      <div className="col-12 cont_fluid">
        <div className="admission-img text-center text-light py-3 align-items-center d-flex">
          <div className="col-lg-7 mx-auto col-ms-12">
            <p className="fw-bolder fs-1 text-break">
              Admission! Admission!! Admission!!!
            </p>
            <p className="fw-bolder fs-2 ">
              Apply for Admission into School of Science Ogbomoso (SOSO).
            </p>
          </div>
        </div>
        <h2 className="text-center card-header border-0">
          Admission into Senior Secondary School One(SSS 1)
        </h2>
        <div className="col-12 all_equal">
          <p className="mt-3">
            <b>NOTICE:</b> Please, read carefully all the instructions
            documented in this page for your admission processing.
          </p>
          {
            isLoading? "" : status ? <p className="alert alert-success py-2 shadow-sm text-center">{message}</p> : <p className="alert alert-danger py-2 shadow-sm">{message}</p>
          }
          <div className="button-group col-10 mx-auto mb-4 text-end">
            <input
            type="button"
              className="btn dropdownKey py-2 textColor fs-5"
              onClick={editAll}
              value={editBtn}
            />
            
            <button
              className="btn navbar-light py-2 text-light fs-5"
              onClick={saveChange}
            >
               {
                isGoing? <div class="spinner-border border-1" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>:
                <span >Save</span>
              }
            </button>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">ELIGIBILITY</p>
            <textarea
              cols="10"
              rows="10"
              className="form-control"
              placeholder="Admission eligibility"
              onChange={(e) => setadmissionEli(e.target.value)}
              value={admissionEli}
              readOnly={disable}
            ></textarea>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">
              REQUIREMENT FOR THE ADMISSION
            </p>
            <textarea
              cols="10"
              rows="10"
              className="form-control"
              placeholder="Admission requirement for the applicants"
              readOnly={disable}
              value={admissionReq}
              onChange={(e) => setadmissionReq(e.target.value)}
            ></textarea>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">ADMISSION BEGINS</p>
            <p className="">
              Admission begins when :{" "}
              <input
                type="text"
                className="p-2 shadow rounded-3 border"
                placeholder="Admission begins when"
                readOnly={disable}
              value={admissionBegins}
                onChange={(e) => setadmissionBegins(e.target.value)}
              />
            </p>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">ADMISSION CLOSES</p>
            <p className="">
              Admission Closes when :{" "}
              <input
                type="text"
                className="p-2 shadow rounded-3 border"
                placeholder="Admission closes when"
                readOnly={disable}
                value={admissionCloses}
                onChange={(e) => setadmissionCloses(e.target.value)}
              />
            </p>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">
              ADMISSION PAYMENT INFORMATION
            </p>
            <textarea
              cols="10"
              rows="10"
              className="form-control"
              placeholder="admission payment information"
              readOnly={disable}
              value={admissionPaymentInfo}
              onChange={(e) => setadmissionPaymentInfo(e.target.value)}
            ></textarea>
            <p className="text-muted">
              <i>
                Please follow the analization above for your payments! (warning
                to the applicants)
              </i>
            </p>
          </div>
          <div className="px-3 my-3">
            <p className="fw-bolder text-muted">
              REGISTRATION STEPS FOR THE ADMISSION
            </p>
            <textarea
              cols="10"
              rows="10"
              className="form-control"
              placeholder="Steps for admission"
              readOnly={disable}
              value={admissionRegStep}
              onChange={(e) => setadmissionRegStep(e.target.value)}
            ></textarea>
          </div>
          <div className="button-group col-10 mx-auto mb-4">
           
            <input
            type="button"
              className="btn dropdownKey w-50 py-2 textColor fs-5"
              onClick={editAll}
              value={editBtn}
            />
            <button
              className="btn navbar-light w-50 py-2 text-light fs-5"
              onClick={saveChange}
            >
              {
                isGoing? <div class="spinner-border border-1" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>:
                <span >Save Changes</span>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAdmissionEnd;
