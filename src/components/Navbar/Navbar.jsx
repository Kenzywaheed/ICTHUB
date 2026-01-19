import { useState } from "react";
// import LoginModal from "../LoginModal/Authentication";
import "./Navbar.css";
function Navbar() {
  // const [show, setShow] = useState(false);
  // const [action, setAction] = useState("Login"); 

  
  // const handleShow = (modalAction) => {
  //   setAction(modalAction); 
  //   setShow(true);
  // };

 
  // const handleClose = () => setShow(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/images/icthub.jpeg" alt="Logo" width="160px" height="48px" style={{ marginLeft: "20px" }}/>
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
               <li className="nav-item"><a className="nav-link" href="/Home-page">Home</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="/academy-page">Academy</a></li> */}
            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="/solution">Solutions</a></li> */}
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="/event">Events</a></li> */}
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>

          {/* <div className="social-icons d-flex align-items-center">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-search"></i>
          </div> */}

          {/* <div className="section-button d-flex align-items-center">
            <button className="btn btn-light" onClick={() => handleShow("Login")}>
              Login
            </button>
            <button className="btn btn-custom" onClick={() => handleShow("Register")}>
              Register
            </button>
          </div> */}
        </div>
      </div>

    
      {/* <LoginModal show={show} handleClose={handleClose} action={action} /> */}
    </nav>
  );
}

export default Navbar;
