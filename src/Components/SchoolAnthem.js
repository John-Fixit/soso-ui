import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos";
import oyoAnthem from '../Audio/Oyo_state_anthem.m4a'
import nigeriaAnthem from '../Audio/Nigerian_anthem.mp3'
import Typewriter from 'typewriter-effect'
function SchoolAnthem() {
  useEffect(() => {
    aos.init();
    aos.refresh();
  }, []);

  const anthem = `
  Arise, O compatriot <br />
  Nigeria's call obey <br />
              To server our fatherland <br />
              With love and strength and faith <br />
              The labour of our heroes past <br />
              Shall not be in vain <br />
              To serve with heart and might <br />
              One nation bound in freedom <br />
              Peace and unity
  `
  return (
    <>
      <div className="col-12 cont_fluid">
        <p
          className="col-12 opacity-75 textColor py-3 text-center fs-2 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          School Anthems
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <p className="col-12 textColor py-3 text-center fs-3 card-header">
              National Anthem
            </p>
            <figure className="card-body px-lg-5 px-md-3 px-2">

    {/* <Typewriter 
  options={{
    strings: anthem,
    autoStart: true,
    // loop: true,
  }}

/> */}


              Arise, O compatriot <br />
              Nigeria's call obey <br />
              To server our fatherland <br />
              With love and strength and faith <br />
              The labour of our heroes past <br />
              Shall not be in vain <br />
              To serve with heart and might <br />
              One nation bound in freedom <br />
              Peace and unity
            </figure>
            <audio src={nigeriaAnthem} controls/>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="col-12 textColor py-3 text-center fs-3 card-header">
              Oyo State Anthem
            </p>
            <figure className="card-body px-lg-5 px-md-3 px-2">
              Asiwaju ni wa <br />
              Asiwaju ni wa <br />
              Asiwaju ni wa
              <br />
              Asiwaju ni wa <br />
              Ipo asiwaju ni eledumare fun wa <br />
              Ni ipinle Oyo <br />
              Ipinle Oyo eje ka se giri <br />
              Omo Oyo katepa wa mose <br />
              Kabarawa soro <br />
              Ka sododo <br />
              Ka doun to to <br />
              Ti o dara <br />
              Nigba gbogbo <br />
              Ni bi gbogbo <br />
              Fun ipinle Oyo <br />
              Ko ni reyin loju mi, ko ni reyin o <br />
              Ko ni reyin O nigba temi, ko ni reyin o <br />
              Emi a se ohun to to dara <br />
              Nigba gbogbo <br />
              Nibi gbogbo <br />
              Fun ipinle Oyo <br />
              Asiwaju ni wa <br />
              Asiwaju ni wa <br />
              Asiwaju ni wa <br />
              A-si-wa-ju-ni-waa.
            </figure>
            <audio src={oyoAnthem} controls/>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="textColor py-3 text-center fs-3 card-header">
              School Anthem
            </p>
            <figure className="card-body px-lg-5 px-md-3 px-2">
              School of Science <br />
              It's the best school in Ogbomoso <br />
              School of Science <br />
              It's the best school in Ogbomoso <br />
              School where Doctor's emerge <br />
              School where Nurses graduate <br />
              Oh! What a pretty school in Ogbomoso <br />
              It's the best school in Oyo State. <br />
              <span className="pt-5">
                School of Science <br />
                Speak the truth and be honest <br />
                School of Science <br />
                Speak the truth and be honest <br />
                Be pure in words, thought and deeds <br />
                Be righteous in behaviour
                <br />
                Endure all hardship and later you again
                <br />
                Makes Nigerian the best country.
                <br />
                UP SCHOOL!!
                <br />
                HURRAY!!
                <br />
              </span>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolAnthem;
