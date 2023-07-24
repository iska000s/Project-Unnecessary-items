import React from "react";
import facebook from "../assets/Facebook.svg"
import instagram from "../assets/Instagram.svg"

const Footer = () => {
    return(
  <footer className="footer_box">
  <p>Copyright by Coders Lab</p>
  <div className="social_media">
    <img src={facebook} alt="facebook"/>
    <img src={instagram} alt="instagram"/>
  </div>
</footer>
    )
}

export default Footer;