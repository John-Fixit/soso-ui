import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Goal() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="col-12">
        <div className="bg-img2 text-center py-5 mt-3">
          <div className="row px-3">
            <div className="col-lg-6 text-white">
              <h2
                className="card-header border-0"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                Our Mission
              </h2>
              <p className="text-start all_equal" data-aos="fade-up-right" data-aos-duration="2000">
                The Mission of the school is to advance knowledge that will make
                students critical thinkers and self-directed learners prepared
                to serve the Nation as leading scientists and technologists in
                educational researches.
              </p>
            </div>
            <div className="col-lg-6 text-white">
              <h2
                className="card-header border-0"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                Our Vision
              </h2>
              <p className="text-start all_equal" data-aos="fade-up-right" data-aos-duration="2000">
                To be one of the country's leading schools that will integrete
                best practices in education with cutting edge research and
                technology development and ensure synergies that will produce
                business and industry leaders who combine technical excellence
                with critical thinking and problem solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goal;
