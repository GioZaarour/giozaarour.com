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
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2022 giozaarour.com</p>
    </div>
  )
}

export default Footer