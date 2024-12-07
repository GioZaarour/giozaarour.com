import React from 'react';
import "../styles/About.css";
import "../styles/Home.css";

function About() {
  return (
    <div>
    <div className="about_home">
        <div className="roles">
            <div className="currently">
                <h2>Currently</h2>
                <p>On the hunt for my next journey building impactful products that spark passion and have ownership.</p>
                <hr />
                <h2>Previously</h2>
                <p>Building <a href="https://www.gte.xyz/" target="_blank" rel="noopener noreferrer">GTE</a>, the first real-time order book DEX on MegaETH, bringing the Wall Street trading experience to crypto @ Liquid Labs</p>
                <p>Researching blockchain, smart contracts, and zero-knowledge @ the <a href="https://anrg.usc.edu/www/" target="_blank" rel="noopener noreferrer">USC Autonomous Networks Research Group</a></p>
                <p>Made it seamless for users & devs to transfer crypto between blockchains @ <a href="https://transfer.xyz" target="_blank" rel="noopener noreferrer">Transfer.xyz</a></p>
                <p>Built investment management software for digital asset ETF investors @  <a href="https://21.co/" target="_blank" rel="noopener noreferrer">21.co</a></p>
                <p>Vice President of  <a href="https://blockchainusc.com" target="_blank" rel="noopener noreferrer">Blockchain@USC</a>, one of the most prominent university blockchain ecosystems with governance delegation, research partnerships, and development grants</p>
                <p>President at the USC Lebanese Student Association, spearheading the Lebanese community on-campus with cultural, professional, philanthropic, and advocacy efforts</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;
