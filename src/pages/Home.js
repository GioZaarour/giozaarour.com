import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
//import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
        <div className="about"> 
            <h2> Hi, I'm Gio. </h2>
            <div className="prompt"> 
                <p>I'm a student at the University of Southern California studying Computer Science and Business. I am passionate about blockchain, finance/financial tech, economics, and entrepreneurship! <br /> <br />
                -Giovanni Zaarour</p>
                <a href="https://github.com/GioZaarour" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/giozaarour/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="https://twitter.com/giozaarour" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                <a href="https://giozaarour.medium.com" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                  </svg>
                </a>
            </div> 
        </div>
        {/*
        <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, Solidity, JavaScript, Python, HTML, R</span>
          </li>
          <li className="item">
            <h2>Tools & Frameworks</h2>
            <span>
                React.js, Node.js, SQL (MySQL, PostgreSQL), MongoDB, Git, Docker
            </span>
          </li>
          <li className="item">
            <h2>Blockchain</h2>
            <span>
                Truffle, Ganache, EVM, Ethers.js, Chainlink Oracle, Etherscan
            </span>
          </li>
          <li className="item">
            <h2>Product</h2>
            <span>
              Market Research, Agile Development, Design Thinking, User Personas, Consumer Surveys/Interviews
            </span>
          </li>
        </ol>
        </div>
        */}
    </div>
  )
}

export default Home