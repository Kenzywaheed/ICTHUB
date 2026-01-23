import React from "react";
import "./Footer.css";

import moment from "moment";
import SocialMedia from "../SocialMedia/SocialMedia";
function Footer() {

  const CurrentYear = moment().format("YYYY");
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid  hide-mobile">
          {/* col1-Address */}
          <div className="footer-col">
            <h4>Contact US</h4>
            <ul className="list">
              <li>
                <a
                  className="custom-link"
                  href="https://www.google.com/maps/search/?api=1&query=Building+34,+Apartment"
                  target="_blank"
                  rel=""
                >
                  Building 34, Apartment
                </a>
              </li>
              <li>
                <a
                  className="custom-link"
                  href="https://www.google.com/maps/search/?api=1&query=AlIttihad+Al+Taawuniya,+Al+Shorouk+City,+Cairo"
                  target="_blank"
                  rel=""
                >
                  AlIttihad Al Taawuniya - Al Shorouk City - Cairo
                </a>
              </li>
            </ul>
          </div>

          {/* col2-mails */}
          <div className="footer-col">
            <h4>Contact Email</h4>
            <ul className="list">
              <li>
                <a
                  className="custom-link"
                  href="mailto:info@icthubeg.com
         ?subject="
                  target="_blank"
                >
                  info@icthubeg.com
                </a>
              </li>
              <li>
                <a
                  className="custom-link"
                  href="mailto:info@icthubeg.com
         ?subject= "
                >
                  hr@icthubeg.com
                </a>
              </li>
            </ul>
          </div>

          {/* col3-phones */}
          <div className="footer-col ">
            <h4>Contact Phones</h4>
            <ul className="list">
              <li>
                <a className="custom-link" href="tel:01098855484">
                  01098855484
                </a>
              </li>
              <li>
                <a className="custom-link" href="tel:01556427825">
                  01556427825
                </a>
              </li>
            </ul>
          </div>

          {/* col4-social media */}
          <div className="footer-col">
            <h4>Our Social Media and whatsapp</h4>
            <div className="footer-icon">
           <SocialMedia />
           </div>
          </div>
        </div>
      </div>
      {/* line */}
      <hr />

      <div className="footer-bottom-line"></div>

         {/* current year */}
      <p className="year-footer">
        {CurrentYear} - All Rights Reseved Egy4server
      </p>
    </footer>
  );
}

export default Footer;
