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
                <p>I'm a student at the University of Southern California studying Computer Science and Business. Some things I like are: blockchains, distributed systems, machine learning, cryptography, finance, economics, and entrepreneurship.</p>
                <a href="https://github.com/GioZaarour" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/giozaarour/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="https://twitter.com/giozaarour" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                <a href="https://giozaarour.substack.com" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 448 511.471"><path fill="white" d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/></svg>
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