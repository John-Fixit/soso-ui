import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Curriculum() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div className='col-12 cont_fluid noOverflow'>
        <p className='col-12 opacity-75 text-ligh textColor py-3 text-center fs-2 ' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">School Curriculum Policy</p>
        <div className='col-lg-9 mx-auto text-muted col-sm-12 px-3'>
          <p className='text-muted'><b>SOSO CURRICULUM WILL BE HERE</b> ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
          <p data-aos="zoom-in" className='mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
          <hr />
          <div className='col-12 py-3'>
            <div className='row'>
              <div className='col-md-6 text-start'>
                <p className='fs-3 textColor text-center' data-aos="fade-up-left">Composition of Overall Marks</p>
                <p data-aos="zoom-in" className='mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
              </div>
              <div className='col-md-6 text-start'>
                <p className='fs-3 textColor text-center' data-aos="fade-up-left">Assessment Methods</p>
                <p data-aos="zoom-in" className='mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam impedit ducimus dignissimos. Expedita deserunt suscipit, quaerat vitae voluptatibus sapiente tempora totam at deleniti dolores doloremque animi harum. Eius, alias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Curriculum