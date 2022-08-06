import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import AdminPage from './Components/AdminPage'

function First() {
  return (
   <>
        <Routes>
            <Route path='/*' element={<App/>}/>
            <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>
   </>
  )
}

export default First