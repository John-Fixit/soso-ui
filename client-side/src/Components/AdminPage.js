import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAdmissionEnd from './AdminAdmissionEnd'
import AdminAwardEnd from './AdminAwardEnd'
import AdminGallery from './AdminGallery'
import AdminHome from './AdminHome'
import AdminNav from './AdminNav'
import SOSO from './SOSO'

function AdminPage() {
  return (
   <>
          <AdminNav />
            <Routes>
                <Route path='/' element={<AdminHome />}/>
                <Route path='/award' element={<AdminAwardEnd />}/>
                <Route path='/admission-update' element={<AdminAdmissionEnd />}/>
                <Route path='/gallery' element={<AdminGallery />}/>
            </Routes>
            <SOSO />
   </>
  )
}

export default AdminPage