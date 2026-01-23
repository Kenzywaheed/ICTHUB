
import "./GetInTouch.css";
import { useState } from "react";

function GetInTouch() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName.length < 10) {
      setFullNameError("Full Name must be at least 10 characters");
      return;
    }

    if (phone.length < 11 || isNaN(phone)) {
      setPhoneError("Phone must be 11 digits only");
      return;
    }

    if (!email.includes("@")) {
      setEmailError("invalid ");
      return;
    }

    if (message.length < 5) {
      setMessageError("Message must be at least 5 characters ");
      return;
    }

    if (companyName.length < 5) {
      setCompanyError("Company Name must be at least 5 characters ");
      return;
    }
    setFullNameError("");
    setPhoneError("");
    setEmailError("");
    setMessageError("");
    setCompanyError("");
  };

  return (
    <div className="contact-us">
      <div className="container">
        <h1 className="header">GET IN TOUCH</h1>
        <br />
        <form onSubmit={handleSubmit} className="text-center">
          <div className="row">
            <div className="col-lg-4 mb-3">

              {/* full name */}
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span className="error-text">{fullNameError}</span>
            </div>

            <div className="col-lg-4 mb-3">

              {/* company name */}
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <span className="error-text"> {companyError}</span>
            </div>

            <div className="col-lg-4 mb-3">

              {/* phone */}
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="error-text">{phoneError}</span>
            </div>

            <div className="col-lg-4 mb-3">

              {/* email */}
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error-text">{emailError}</span>
            </div>

            <div className="col-lg-4 mb-3">

              {/* selection */}
              <label className="form-label">Select Services</label>
              <select
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Choose a service</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-lg-12 mb-3">

              {/* message */}
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span className="error-text">{messageError}</span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary custom-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;


