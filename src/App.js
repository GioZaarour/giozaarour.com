import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
//import Articles from './pages/Articles';
//import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />}/>
          <Route path="/articles" element={<Articles />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function Articles() {
  // 👇️ redirect to external URL
  window.location.replace("/", "Home");
  window.open("https://medium.com/@giozaarour", "Medium").focus();
  return null;
}

function Resume() {
  // 👇️ redirect to external URL
  window.location.replace("/", "Home");
  window.open("http://giozaarour.com/Resume.pdf", "Resume").focus();
  return null;
} 

export default App;
