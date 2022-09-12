import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
    const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState();
  const [message, setmessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const loginAdmin = () => {
    setisLoading(true)
    const userInfo = { username, password };
    axios
      .post("http://localhost:4000/login", userInfo)
      .then((res) => {
        setisLoading(false)
        setstatus(() => {
            return res.data.status;
          });
          setmessage(() => {
            return res.data.message;
          });
        
        if (res.data.status) {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/admin/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="noOverflow col-lg-8 mt-2 mx-auto">
        {
            status == null ? " " : status ? <p className="alert alert-success text-center">{message}</p>: <p className="alert alert-danger text-center">{message}</p>
        }
        <div className="row">
          <div className="col-sm-6 navbar-light text-center fs-3 text-white pt-4">Oyo State School of Science Ogbomoso.</div>
          <div className="col-sm-6">
            <div className="form">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Username"
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mt-2">
                <input
                  type="password"
                  className="form-control "
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <label htmlFor="Password">Password</label>
              </div>
                <button className="btn navbar-light admin_form_btn mt-2 text-white w-100" onClick={loginAdmin}>
                   {isLoading? <div className="spinner-border text-white"><span className="visually-hidden">Loading...</span></div> : "Login"}
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
