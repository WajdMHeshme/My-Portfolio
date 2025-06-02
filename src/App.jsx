import { useEffect } from 'react';
import Home from './components/Home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,  
    });
  }, []);
  return (
    <>
    <Home />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    <Nav />
    </>
  )
}

export default App
