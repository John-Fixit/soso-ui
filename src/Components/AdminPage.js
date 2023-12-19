import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminAdmissionEnd from "./AdminAdmissionEnd";
import AdminAwardEnd from "./AdminAwardEnd";
import AdminGallery from "./AdminGallery";
import AdminHome from "./AdminHome";
import AdminNav from "./AdminNav";
import SOSO from "./SOSO";

function AdminPage() {
  const url = `${process.env.REACT_APP_SERVER_BASE_URL}/adminHome`;
  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "applicatio/json",
          "Accept": "application/json",
        },
      })
      .then((res) => {
       if(res.data.status){
        console.log(res.data.message);
       }else{
          localStorage.removeItem('token')
          navigate('/user')
       }
      });
  }, []);
  return (
    <>
      <AdminNav />
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/award" element={<AdminAwardEnd />} />
        <Route path="/admission-update" element={<AdminAdmissionEnd />} />
        <Route path="/gallery" element={<AdminGallery />} />
      </Routes>
      <SOSO />
    </>
  );
}

export default AdminPage;
