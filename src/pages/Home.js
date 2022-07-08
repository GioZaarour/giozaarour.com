import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
        <div className="about"> 
            <h2> Giovanni Zaarour </h2>
            <div className="prompt"> 
                <p> kliris writing some shit here</p>
                <GitHubIcon />
                <LinkedInIcon />
                <EmailIcon />
            </div> 
        </div>
        <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, SQL (MySQL, PostgreSQL), MongoDB
            </span>
          </li>
          <li className="item">
            <h2> Blockchain</h2>
            <span>
              Truffle, Ganache, Ethers.js, Chainlink Oracle, Etherscan
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, Solidity, JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home