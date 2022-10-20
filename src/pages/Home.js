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
                <p>Hi! I'm a third-year student at USC majoring in Computer Science and Business. Pursuing a career in financial tech or blockchain as a full-stack software engineer.
                </p>
                <a href="https://github.com/GioZaarour" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/giozaarour/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="mailto:giozaarour@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            </div> 
        </div>
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
    </div>
  )
}

export default Home