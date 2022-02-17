import React from "react";

import { FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import "./Footer.css"

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <div className="footer__social">
        <a href="mailto:hui.nathan9@gmail.com"><HiOutlineMail color="#FFF" /></a>
        <a href="https://www.linkedin.com/in/nathan-hui"><FaLinkedinIn color="#FFF" /></a>
      </div>
      
      <div className="footer__copyright opensans">
        <div className="footer__copyright-text">Copyright &#169; 2022 Nathan Hui. All rights reserved.</div>
      </div>
    </div>
  </div>
)

export default Footer