import React, { useState } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../Images/soso logo.png";
import style from "../App.css";
function AdminNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top px-4 py-0">
        <div className="container-fluid">
          <Link to="" className="navbar-brand text-light">
            <img src={schoolLogo} className="card-img-top schoolLogo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
              <Link
                  to="/admin/"
                  className="nav-link text-light me-4"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/admission-update"
                  className="nav-link text-light me-4"
                >
                  Admission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/award"
                  className="nav-link active text-light me-4"
                  aria-current="page"
                >
                  Awards & Distiction
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin/gallery"
                  className="nav-link active text-light me-4"
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNav;
