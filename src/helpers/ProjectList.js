import moonlight from "../assets/home.png";
// import tempusGif from "../assets/tempus.gif";
import websiteCom from "../assets/giozaa.JPG";
import avlShit from "../assets/BSTSearch.png";
import sudoku from "../assets/sudoku.png";
import wordle from "../assets/wordle.jpg";
import elac from "../assets/patrontool.png";
import datareport from "../assets/datareport.JPG";
import potatio from "../assets/potatio.jpg";
import trojanscheduler from "../assets/trojanscheduler.PNG";
import passivum from "../assets/passivum.jpg";
import paxos from "../assets/paxos.jpg";

export const ProjectList = [
    {
        name: "Paxos RSM", 
        image: paxos,
        skills: "Paxos, Go, Distributed Systems, Parallel Computing, Remote Procedure Calls, Concurrency",
        github: "https://github.com/GioZaarour/Paxos-RSM",
        description: "Replicated state machine (a key/value store) using a custom Paxos algorithm implementation in Go. This was a project for my upper division Distributed Systems class at USC.",
        short: "RSM using a custom Paxos algorithm implementation in Go",
    },
    {
        name: "Passivum Wallet", 
        image: passivum,
        skills: "Solidity, Foundry, Next.js, React.js, Ethers.js, ERC-4337",
        github: "https://github.com/BlockchainUSC/passivum_wallet",
        description: "Passivum is an account abstraction smart contract wallet built on top of the Biconomy SDK that allows users to enable social recovery and stake their idle tokens in DEX liquidity pools -- all with just one click and without paying any gas fees thanks to gasless batch trasactions.",
        short: "ERC-4337 smart contract wallet with built-in DeFi dApp",
    },
    {
        name: "Trojan Scheduler", 
        image: trojanscheduler,
        skills: "Java, JavaScript, MySQL DB, Python Scraping, Client-Server Networking",
        github: "https://github.com/GioZaarour/Trojan-Scheduler",
        description: "Trojan scheduler is an app designed to help USC students find the best GE courses based on their schedule availability, the desired GE category, and optimal professor ratings. This scrapes data from the USC web registration page and professor rating data from RateMyProfessor.",
        short: "Web app designed to help USC students find the best GE courses",
    },
    {
        name: "moonlight.xyz", 
        image: moonlight,
        skills: "Solidity, Truffle, Ganache, Chainlink, Ethers.js, Smart Contract Testing & Deployment (NodeJS)",
        github: "https://github.com/GioZaarour/moonlight-contracts",
        description: "Moonlight is a fractional NFT crowdfunding and co-ownership protocol on the Ethereum blockchain. Includes features such as DAO governance, Uniswap AMM fork, fractionalization, and more.",
        short: "NFT crowdfunding and co-ownership protocol"
    },
    {
        name: "Primary-Backup RSM", 
        image: paxos,
        skills: "Primary-Backup Replication, Go, Distributed Systems, Parallel Computing, Remote Procedure Calls, Concurrency",
        github: "https://github.com/GioZaarour/Primary-Backup-RSM",
        description: "Replicated state machine (a key/value store) using a custom primary-backup replication implementation in Go, with an unreplicated view service. This was a project for my upper division Distributed Systems class at USC.",
        short: "RSM using a custom primary-backup replication implemenatation in Go",
    },
    {
        name: "potat.io", 
        image: potatio,
        skills: "Solidity, Foundry, React.js, Ethers.js",
        github: "https://github.com/dangush/ethsanfrancisco22",
        description: "Betting game built on Ethereum/Polygon, utilizing payment streaming via Superfluid. For the ETHGlobal San Francisco 2022 hackathon. Our project won prizes for three different sponsor pools",
        short: "Smart contract betting game built on the blockchain"
    }, 
    // {
    //     name: "giozaarour.com", 
    //     image: websiteCom,
    //     skills: "JavaScript (ReactJS), HTML, CSS, Web Hosting",
    //     github: "https://github.com/GioZaarour/giozaarour.com",
    //     description: "My personal website (this one!) and portfolio.",
    //     short: "This website"
    // }, 
    {
        name: "C++ AVL Tree", 
        image: avlShit,
        skills: "C++, Advanced Data Structures",
        github: "https://github.com/GioZaarour/C-AVL-Tree",
        description: "An AVL tree is a self-balancing binary search tree, which is a popular yet complicated data structure. Coded in C++ using OOP, templating, pointers, memory allocation, etc.",
        short: "Self-balancing binary search tree implemented from scratch"
    },
    {
        name: "Python Library Data Visualizer",
        image: datareport,
        skills: "Python, Powershell Scripting, HTML, REST API",
        github: "https://github.com/GioZaarour/Library-Data-Visualizer",
        description: "Tool for generating monthly data reports for all library branches in Glendale, CA. Accesses the library database with Sierra REST API and generates an HTML data report with a python script",
        note: "This is a project I built while working for the City of Glendale, and is used by library department executives for quality control and insights.",
        short: "Tool to generate monthly database reports for library branches"
    },
    {
        name: "Library Registration Page",
        image: elac,
        skills: "PHP, SQL, HTML, REST API",
        github: "https://github.com/GioZaarour/Library-Patron-Registration-Tool",
        description: "Online patron registration tool that generates a new library card number and patron profile (connected to the Library ILS Database via Sierra REST API).",
        note: "This is a project I built while working for the City of Glendale, and is being used by the public at https://register.eglendalelac.org ",
        short: "Online registration system for library branches in Glendale, CA"
    },
    // {
    //     name: "Tempus NFT", 
    //     image: tempusGif,
    //     skills: "Solidity, IPFS, Web3.js",
    //     github: "https://github.com/GioZaarour/tempus-nft",
    //     description: "Smart contract development, testing, and deployment for tempusnft.io, a history-based NFT collection. IPFS hosting and minting DApp (web3.js) for the frontend.",
    //     short: "10k NFT project with frontend application for minting"
    // }, 
    // {
    //     name: "Wordle Solver", 
    //     image: wordle,
    //     skills: "C++, Recursive Algorithms",
    //     github: "https://github.com/GioZaarour/C-Wordle-Solver",
    //     description: "Outputs possible solutions for a wordle game. Generates all possible combinations using a recursive counting algorithm then pulls matching English words from the dictionary file",
    //     short: "Generates all possible solutions for wordle in C++"
    // },
    // {
    //     name: "Sudoku Solver", 
    //     image: sudoku,
    //     skills: "C++, Backtracking Recursion",
    //     github: "https://github.com/GioZaarour/C-Sudoku-Solver",
    //     description: "Sudoku board solver using a recursive backtracking algorithm in C++",
    //     short: "Solves sudoku board in C++ with backtracking algorithm"
    // },
];