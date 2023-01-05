import React from "react";
import '../footer/index.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://www.instagram.com/nekitechnologies/">
        <FaInstagram size="40"  color="#fff"/>

     
        </a>
        <a href="https://www.facebook.com/nekitechnologies">
        <FaFacebook size="40"  color="#fff"/>
     
        </a>  
        <a href="https://www.linkedin.com/company/neki-it/?originalSubdomain=br">
        <FaLinkedin size="40"  color="#fff"/>
     
        </a>  
      </div>
      <p className="footer-copyright">© 2023 – Neki – All rights reserved

</p>
    </footer>
  );
};
