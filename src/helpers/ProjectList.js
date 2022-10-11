import moonlight from "../assets/home.png";
import tempusGif from "../assets/tempus.gif";
import websiteCom from "../assets/giozaa.JPG";
import avlShit from "../assets/BSTSearch.png";
import sudoku from "../assets/sudoku.png";
import wordle from "../assets/wordle.jpg";
import elac from "../assets/patrontool.png";
import datareport from "../assets/datareport.JPG";

export const ProjectList = [
    {
        name: "Moonlight.xyz", 
        image: moonlight,
        skills: "Solidity, Truffle, Ganache, Chainlink, Ethers.js, Smart Contract Testing & Deployment (NodeJS)",
        github: "https://github.com/GioZaarour/moonlight-contracts",
        description: "Moonlight is a fractional NFT crowdfunding and co-ownership protocol on the Ethereum blockchain. Includes features such as DAO governance, Uniswap AMM fork, fractionalization, and more.",
        //note: "*NOTE: I am under an NDA by Moonlight Meta, Inc. and am unable to make this code repository public. Please contact me directly if you would like to see a snippet of my work. Please read the whitepaper by clicking the GitHub icon above.",
    }, 
    {
        name: "Tempus NFT", 
        image: tempusGif,
        skills: "Solidity, IPFS, Web3.js",
        github: "https://github.com/GioZaarour/tempus-nft",
        description: "Smart contract development, testing, and deployment for tempusnft.io, a history-based NFT collection. IPFS hosting and minting DApp (web3.js) for the frontend.",
    }, 
    {
        name: "giozaarour.com", 
        image: websiteCom,
        skills: "JavaScript (ReactJS), HTML, CSS, Web Hosting",
        github: "https://github.com/GioZaarour/giozaarour.com",
        description: "My personal website (this one!) and portfolio.",
    }, 
    {
        name: "C++ AVL Tree", 
        image: avlShit,
        skills: "C++, Advanced Data Structures",
        github: "https://github.com/GioZaarour/C-AVL-Tree",
        description: "An AVL tree is a self-balancing binary search tree, which is a popular yet complicated data structure. Coded in C++ using OOP, templating, pointers, memory allocation, etc.",
    },
    {
        name: "Python Library Data Visualizer",
        image: datareport,
        skills: "Python, Powershell Scripting, HTML, REST API",
        github: "https://github.com/GioZaarour/Library-Data-Visualizer",
        description: "Tool for generating monthly data reports for all library branches in Glendale, CA. Accesses the library database with Sierra REST API and generates an HTML data report with a python script",
        note: "This is a project I built while working for the City of Glendale, and is used by library department executives for quality control and insights.",
    },
    {
        name: "Library Registration Page",
        image: elac,
        skills: "PHP, SQL, HTML, REST API",
        github: "https://github.com/GioZaarour/Library-Patron-Registration-Tool",
        description: "Online patron registration tool that generates a new library card number and patron profile (connected to the Library ILS Database via Sierra REST API).",
        note: "This is a project I built while working for the City of Glendale, and is being used by the public at https://register.eglendalelac.org ",
    },
    {
        name: "Wordle Solver", 
        image: wordle,
        skills: "C++, Recursive Algorithms",
        github: "https://github.com/GioZaarour/C-Wordle-Solver",
        description: "Outputs possible solutions for a wordle game. Generates all possible combinations using a recursive counting algorithm then pulls matching English words from the dictionary file",
    },
    {
        name: "Sudoku Solver", 
        image: sudoku,
        skills: "C++, Backtracking Recursion",
        github: "https://github.com/GioZaarour/C-Sudoku-Solver",
        description: "Sudoku board solver using a recursive backtracking algorithm in C++",
    },
];