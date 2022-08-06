import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAdmissionEnd from './AdminAdmissionEnd'
import AdminAwardEnd from './AdminAwardEnd'
import AdminNav from './AdminNav'
import SOSO from './SOSO'

function AdminPage() {
  return (
   <>
          <AdminNav />
            <Routes>
                <Route path='/award' element={<AdminAwardEnd />}/>
                <Route path='/admission-update' element={<AdminAdmissionEnd />}/>
            </Routes>
            <SOSO />
   </>
  )
}

export default AdminPage