import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  //the following 3 lines exclude footer from the home ("/") page
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/") return null;

  return (
    <div className="footer">
        <div className="socialMedia"> 
            <a href="https://github.com/GioZaarour" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/giozaarour/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://twitter.com/giozaarour" target="_blank" rel="noreferrer"><TwitterIcon /></a>
            <a href="mailto:giozaarour@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
        </div>
        <p> &copy; 2022 giozaarour.com</p>
    </div>
  )
}

export default Footer