import { useState } from "react";
import "./Navbar.css";
import SocialMedia from "../SocialMedia/SocialMedia";
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/images/icthub.jpeg"
            alt="Logo"
            width="160px"
            height="48px"
            style={{ marginLeft: "20px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto nav-center">
            <li className="nav-item">
              <a className="nav-link" href="/Home-page">
                Home
              </a>
            </li>
            {/* <li className="nav-item"><a className="nav-link" href="/academy-page">Academy</a></li> */}
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            {/* <li className="nav-item"><a className="nav-link" href="/solution">Solutions</a></li> */}
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="my-icon">
          <SocialMedia />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
