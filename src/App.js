
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Navbar and footer should be the same no matter what page your in. so don't put inside the routes component. 