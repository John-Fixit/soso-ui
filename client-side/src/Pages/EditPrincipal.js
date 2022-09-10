import React, { useState, useEffect } from "react";
import image from "../Images/Principal.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function EditPrincipal() {
  const [principalName, setprincipalName] = useState("");
  const [principalImage, setprincipalImage] = useState("");
  const [principalNote, setPrincipalNote] = useState("");
  const [principalInfo, setprincipalInfo] = useState([]);
  const [disable, setdisable] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [displayNone, setdisplayNone] = useState(false)
  const PrincipalURI = "https://oysoso.herokuapp.com/from-principal";
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    axios
      .get("https://oysoso.herokuapp.com/to-principal")
      .then((res) => {
        setprincipalInfo(() => {
          return res.data.result;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const chooseFile = (e) => {
    const fileChoosed = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileChoosed);
    reader.onload = () => {
      setprincipalImage(reader.result);
    };
  };
  const editNote = (princ) => {
    setdisable(false);
    setdisplayNone(true)
    setprincipalName(princ.name)
    setPrincipalNote(princ.note)
  };
  const saveChanges = () => {
    setisLoading(true);
    const principal = { principalName, principalNote, principalImage };
    axios.post(PrincipalURI, principal).then((res) => {
      setisLoading(false);
      setdisplayNone(false)
      if (res.data.status) {
        alert(res.data.message);
        window.location.reload();
      } else {
        alert(res.data.message);
      }
    });
  };
  return (
    <>
      <div className="col-12 mt-5">
        {
            principalInfo.length ==1 ?
            principalInfo.map((principal, index)=>(
        <div className="col-lg-10 mx-auto" key={index}>
          <button
            className="btn navbar-light my-2 text-light"
            onClick={()=>editNote({note: principal.principalNote, name: principal.principalName})}
          >
            Edit Principal's Note
          </button>
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-up-right"
              data-duration="1000"
            >
              <img src={ principal.principalImage!= '' ? principal.principalImage :image}  className="w-100 principal_image" />
              <div className="col-lg-12 col-md-6 ms-3">
                <input
                  type="file"
                  onChange={(e) => chooseFile(e)}
                  className={!displayNone ? "form-control mt-2 border-0 d-none": "form-control mt-2 border-0"}
                  disabled={disable}
                />
              </div>
              <h5 className={displayNone? "textColor text-center d-none" : "textColor text-center"}>
              {principal.principalName} (Principal)
              </h5>
              <div className="m-2 col-lg-12 col-md-8 col-sm-12">
                <input
                  type="text"
                  className={!displayNone ? "form-control d-none" : "form-control"}
                  placeholder="Principal's name"
                  onChange={(e) => setprincipalName(e.target.value)}
                  readOnly={disable}
                  value={principalName}
                />
              </div>
            </div>
            <div
              className="col-lg-8 col-sm-12 mx-auto"
              data-aos="fade-up-left"
              data-duration="1000"
            >
              <h2 className="card-header textColor text-center">
                From the Desk of Principal
              </h2>
              <p className={displayNone? "mx-3 d-none": "mx-3"}>
              {principal.principalNote}
                
              </p>
              <textarea
                className={!displayNone ? "form-control d-none" : "form-control"}
                placeholder="principal note"
                cols="5"
                rows="5"
                readOnly={disable}
                onChange={(e) => setPrincipalNote(e.target.value)}
                value={principalNote}
              ></textarea>
            </div>
            <div className="float-end">
              <button
                className="btn navbar-light text-light float-end my-3"
                onClick={saveChanges}
              >
                {isLoading ? (
                  <div className="">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>))
        : 
        <div class="spinner-border textColor" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
}
      </div>
    </>
  );
}

export default EditPrincipal;
