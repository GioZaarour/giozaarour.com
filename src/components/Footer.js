import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <a href="https://github.com/GioZaarour" target="_blank"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/giozaarour/" target="_blank"><LinkedInIcon /></a>
            <a href="https://twitter.com/giozaarour" target="_blank"><TwitterIcon /></a>
            <a href="mailto:giozaarour@gmail.com" target="_blank"><EmailIcon /></a>
        </div>
        <p> &copy; 2022 giozaarour.com</p>
    </div>
  )
}

export default Footer