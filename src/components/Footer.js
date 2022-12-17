import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
//import EmailIcon from '@material-ui/icons/Email';
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
            <a href="https://giozaarour.medium.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
              <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
              </svg>
            </a>
        </div>
        <p> gzaarour@usc.edu <br/> &copy; 2022 giozaarour.com </p>
    </div>
  )
}

export default Footer