import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* col1 */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>Overview</li>
              <li>Delivery Methodology</li>
              <li>Governance Model</li>
              <li>Career</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* col2 */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Training</li>
              <li>Consulting</li>
              <li>Audit</li>
              <li>Web Development</li>
              <li>Professional Services</li>
              <li>Managed Services</li>
            </ul>
          </div>

          {/* col3 */}
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>Digital Enterprise Management</li>
              <li>Governance, Risk and Compliance</li>
              <li>Customer Services Management</li>
              <li>AI & Automation</li>
              <li>Internet of Things (IoT)</li>
            </ul>
          </div>

          {/* col4 */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Support</li>
              <li>Escalations</li>
            </ul>
          </div>

          {/* col5 */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul className="contact-list">
              <li>Send Us A Message</li>
              <li>
                <i className="fa fa-map-o"></i>
                <span>Egypt, New Cairo</span>
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                <span>info@aitbeg.com</span>
              </li>
              <li>
                <i
                  className="fa fa-mobile-phone"
                  style={{ fontSize: "30px" }}
                ></i>
                <span>+2.01027089615</span>
              </li>
            </ul>

            <div className="footer-social">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-line"></div>
    </footer>
  );
}

export default Footer;
