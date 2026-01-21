import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
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
            <a href="https://x.com/0xphoenice" target="_blank" rel="noreferrer"><TwitterIcon /></a>
            <a href="https://giozaarour.substack.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" fill="white" viewBox="0 0 448 511.471"><path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/></svg>
            </a>
        </div>
        <p> giozaarour@gmail.com </p>
    </div>
  )
}

export default Footer