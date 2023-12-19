import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function AdminGallery() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const galleryUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/gallery`
  const [galleryTitle, setgalleryTitle] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [file, setfile] = useState("");
  const [message, setmessage] = useState("");
  const [status, setstatus] = useState();
  const chooseFile = (e) => {
    const fileChoosed = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileChoosed);
    reader.onload = () => {
      setfile(reader.result);
    };
  };
  const uploadFile = () => {
    setisLoading(true);
    const galleryObj = { file, galleryTitle };
    axios
      .post(galleryUrl, galleryObj)
      .then((res) => {
        setisLoading(false);
        setmessage(()=>{return res.data.message});
        setstatus(()=>{return res.data.status});
        setgalleryTitle("");
        if(res.data.status){
          alert(res.data.message)
          window.location.reload()
        }
      })
      .catch((err) => {
        alert(`Something went wrong, please check your connection!`);
        setisLoading(false)
      });
  };
  return (
    <>
      <div className="cont_fluid noOverflow">
        <p
          className="col-12 opacity-75 text-ligh textColor py-3 text-center fs-2 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          Gallery
        </p>
        <div className="col-lg-10 mx-auto">
          <p className="text-center">Welcome To Our Gallery</p>
          <div className="col-lg-6 mx-auto col-sm-12 col-md-6">
            <h3 className="card-header text-center">Upload New Gallery</h3>
            <div className="my-2">
              {status === undefined ? (
                " "
              ) : status ? (
                <p className="alert alert-success">{message}</p>
              ) : (
                <p className="alert alert-danger is-invalid">{message}</p>
              )}
              <input
                type="file"
                className="border-0 form-control"
                onChange={(e) => chooseFile(e)}
              />
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gallery title"
                  onChange={(e) => setgalleryTitle(e.target.value)}
                  value={galleryTitle}
                />
                <label htmlFor="">Gallery title</label>
              </div>
              <button
                className="btn navbar-light text-light my-2 float-end"
                onClick={uploadFile}
              >
                {isLoading ? (
                  <div
                    className="spinner-border border-1 text-white"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminGallery;
