import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import SOSO from './Components/SOSO'
import OurAdmission from './Components/OurAdmission'
import SchoolStructure from './Components/SchoolStructure'
import Curriculum from './Components/Curriculum'
import SchoolAward from './Components/SchoolAward'
import FAQ from './Components/FAQ'
function App() {
  return (
      <>
        <Navbar />
          <Routes>
            <Route path='/' element={<About />}/>
            <Route path='/apply-for-admission' element={<OurAdmission/>} />
            <Route path='/school-structure' element={<SchoolStructure/>} />
            <Route path='/school-curriculum' element={<Curriculum />} />
            <Route path='/award-distinction' element={<SchoolAward />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
          <SOSO />
      </>
  )
}

export default App