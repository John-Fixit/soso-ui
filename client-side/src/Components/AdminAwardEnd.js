import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
function AdminAwardEnd() {
  const postAwardURI = "https://oysoso.herokuapp.com/award";
  const getAwardUri = "https://oysoso.herokuapp.com/getaward";
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [awardText, setawardText] = useState("");
  const [message, setmessage] = useState("");
  const [editedNote, seteditedNote] = useState('')
  const [Id, setId] = useState('')
  const [isGoing, setisGoing] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [status, setstatus] = useState(false);
  const [awards, setawards] = useState([]);
  useEffect(() => {
    axios.get(getAwardUri).then((res) => {
      setawards(() => {
        return res.data.awards;
      });
    });
  }, []);
  const modalOutEdit=(data)=>{
    seteditedNote(data.note)
    setId(data.Id)
  }
  const saveAward = () => {
    setisGoing(true);
    axios.post(postAwardURI, { awardText }).then((res) => {
      setisLoading(false);
      setisGoing(false);
      setmessage(res.data.message);
      setstatus(res.data.status);
      if (res.status) {
        setawardText("");
        window.location.reload();
      }
    });
  };
  const editFunc = (award) => {
    axios.post("https://oysoso.herokuapp.com/edit-award", award).then((res) => {
      if(res.data.status){
        window.location.reload()
      }
      else{
        alert(res.data.message)
      }
    });
  };
  const delFunc = (awardId) => {
    if (window.confirm("Are you sure to Delete this Award content?")) {
      axios
        .post("https://oysoso.herokuapp.com/delete-award", { awardId })
        .then((res) => {
          if (res.data.status) {
            window.location.reload();
          } else {
            alert(res.data.message);
          }
        });
    }
  };
  return (
    <div className="col-12 cont_fluid">
      <p
        className="col-12 opacity-75 textColor py-3 text-center fs-2 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Awards & Distinctions
      </p>
      <div className="col-10 mx-auto text-muted gy-5 text-center scrollDiv">
        {awards.length < 1 ? (
          <div className="spinner-border textColor" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          awards.map((award, index) => (
            <div key={index}>
              <div className="text-center border-bottom py-3 textColor fw-bold shadow-sm">
                {award.awardText}
                <div className="mt-2">
                  <button
                    type="button"
                    className="btn btn-success mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={()=>modalOutEdit({note: award.awardText, Id: award._id})}
                  >
                    <FaEdit size="3vh" />
                  </button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Edit Award
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <textarea
                            className="form-control"
                            cols="5"
                            rows="5"
                            onChange={(e) => seteditedNote(e.target.value)}
                            value={editedNote}
                          ></textarea>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-success mx-2"
                            onClick={() =>
                              editFunc({
                                awardId: Id,
                                awardNote: editedNote,
                              })
                            }
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => delFunc(award._id)}
                  >
                    <FaTrash size="3vh" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="col-lg-10 mx-auto text-muted gy-5 col-sm-12 px-2">
        <p
          className="col-12 textColor py-3 text-center fs-5"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          Add New Awards & Distinctions
        </p>
        <p className="text-center">
          <b>Format:</b> Date, Event,location and Award
        </p>
        {isLoading ? (
          ""
        ) : status ? (
          <p className="alert alert-success text-center">{message}</p>
        ) : (
          <p className="alert alert-danger text-center">{message}</p>
        )}
        <div className="py-2">
          <textarea
            className="form-control"
            cols="7"
            rows="7"
            onChange={(e) => setawardText(e.target.value)}
            value={awardText}
          ></textarea>
          <button
            className="btn navbar-light px-4 py-2 mt-3 text-light fs-5"
            onClick={saveAward}
          >
            {isGoing ? (
              <div
                className="spinner-border text-light opacity-50"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span>Save</span>
            )}
          </button>
        </div>
        <footer className="mt-3">
          <p
            className="text-center shadow dropdownKey rounded-pill py-3"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Oyo State School of Science Ogbomoso
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AdminAwardEnd;
