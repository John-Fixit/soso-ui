import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function Gallery() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    axios.get('http://localhost:4000/getGallery').then((res)=>{
        console.log(res.data);
    })
  }, []);
  return (
    <>
      <div className="cont_fluid noOverflow">
        <p
          className="col-12 navbar-ligh opacity-75 text-ligh textColor py-3 text-center fs-2 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          Gallery
        </p>
        <div className="col-10 mx-auto">
               <p className="text-center">Welcome To Our Gallery</p>
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-4">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
