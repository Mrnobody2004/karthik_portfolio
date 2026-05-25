import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import DarkModeToggle from './components/ui/DarkModeToggle';
import useSmoothScroll from './hooks/use-smooth-scroll';
import useSectionObserver from './hooks/use-section-observer';
import './styles/section-transitions.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const [loading, setLoading] = useState(true);
  
  // Initialize smooth scrolling and section transitions
  useSmoothScroll();
  useSectionObserver();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1500); // Slightly longer loading for better animation effect
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="App" style={{ display: loading ? 'none' : 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Navbar />
        <Header />
        <main>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;