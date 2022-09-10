import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function SchoolAward() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const getAwardUri = "https://oysoso.herokuapp.com/getaward";
  const [awards, setawards] = useState([]);
  useEffect(() => {
    axios.get(getAwardUri).then((res) => {
      setawards(() => {
        return res.data.awards;
      });
    });
  }, []);

  return (
    <div className="col-12 cont_fluid noOverflow">
      <p
        className="col-12 navbar-ligh opacity-75 text-ligh textColor py-3 text-center fs-2 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Awards & Distinctions
      </p>
      <div className="col-9 mx-auto text-muted gy-5 text-center scrollDiv">
        {awards.length < 1 ? (
          <div className="spinner-border textColor" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          awards.map((award, index) => (
            <div key={index}>
              <p className="text-center border-bottom py-3 textColor fw-bold">
                {award.awardText}
              </p>
            </div>
          ))
        )}
      </div>
        <footer>
          <p
            className="text-center shadow dropdownKey rounded-pill py-2"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Oyo State School of Science Ogbomoso.
          </p>
        </footer>
    </div>
  );
}

export default SchoolAward;
