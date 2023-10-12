// Footer.js
import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left" id="footer">
        <div className="logo logo-footer">WeFrame</div>
        <div className="reach-us">
          <h3>REACH US</h3>
          <p className="footer-bold">Administrative Address</p>
          <p className="footer-custom">
            V-Frame - Office No, Street, Colony, City, State - [PIN]
          </p>
          <p className="footer-bold">Registered Address</p>
          <p className="footer-custom">
            Office No, Street, Colony, City, State - [PIN]
          </p>
          <p className="footer-custom">+91 XXXXXXXXXX</p>
          <p className="footer-custom">weframe.in</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <p className="footer-custom">WeFrame - Redefining collaboration for a better tomorrow</p>
          <p className="footer-custom">© 2023 WeFrame. All rights reserved.</p>
          <div className="footer-social-icons">
            <SocialMediaIcon isSocialOpen={true} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
