import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function FAQ() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [faqs, setfaqs] = useState(['john', 'Raphael', 'Mary', 'Zion', 'Adesewa'])
  return (
    <>
      <div className='col-12 cont_fluid'>
        <p className='col-12 opacity-75 text-ligh textColor py-3 text-center fs-2 ' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">Frequently Asked Question</p>
        <div className='col-lg-9 mx-auto shadow my-4'>
          <div className="accordion mt-3 shadow" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className='accordion-body'>
                  <strong>This is the first item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mt-3 shadow">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-3 shadow">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-3 shadow">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                Accordion Item #4
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-3 shadow">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                Accordion Item #5
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-3 shadow">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" >
                Accordion Item #6
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse rounded-3" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FAQ