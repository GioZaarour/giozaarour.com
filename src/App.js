import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
//import Articles from './pages/Articles';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
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
  window.location.replace("https://medium.com/@giozaarour", "_blank").focus();
  //window.open("./pages/home");
  return null;
}

export default App;
