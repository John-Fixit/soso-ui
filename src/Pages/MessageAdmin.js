import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function MessageAdmin() {
  return (
   <>
        <a href='https://wa.me/+2348087154982?text=Hello SOSO, I have an enquiry.' className='btn btn-dark rounded-pill text-white position-fixed bottom-0 mb-3 float-end'><FaWhatsapp size="4vh" className="rounded-circle border-white bg-success"/> Chat With Admin</a>
   </>
  )
}

export default MessageAdmin