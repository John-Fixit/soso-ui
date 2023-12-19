import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
function Gallery() {
  const [allGallery, setallGallery] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);
  const imagePerPage = 12;
  const imageDisplayed = imagePerPage * pageNumber;
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/getGallery`
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    axios.get(url).then((res) => {
      setallGallery(() => {
        return res.data.result;
      })
    });
  }, []);
  const displayImage =  
  allGallery.length ?
  
  allGallery.slice(imageDisplayed, imageDisplayed + imagePerPage).map((gallery, index)=>(
    <div className="col-lg-3 col-sm-12 col-md-4" key={index}>
        <div className="card shadow">
            <img src={gallery.file}/>
        </div>
        <p className="text-center textColor mt-2">{gallery.title}</p>
    </div>
    )):
    <p className="text-center fs-1">
                  Something went wrong! <br /> or <br />
                  No Gallery Saved
                </p>
    const countPage = Math.ceil(allGallery.length/imagePerPage)
    const changePage =({selected})=>{
      setpageNumber(selected)
    }
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
            {
              allGallery.length < 1 ? (
                <p className="text-center fs-1">
                  Something went wrong! <br /> or <br />
                  No Gallery Saved
                </p>
              ) : 
              <div className="row">
                  {displayImage}
                  <ReactPaginate 
                    previousLabel={'Previous'}
                    pageCount={countPage}
                    onPageChange={changePage}
                    containerClassName={'paginateBtn'}
                    activeClassName={'paginateActive'}
                  />
                </div>
           }
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
