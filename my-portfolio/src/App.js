import './App.css';
import {useEffect} from 'react'
import { Routes, Route} from "react-router-dom";
import About from "./routes/AboutPage";
import Home from "./routes/HomePage";
import NavbarPage from './components/NavbarPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from './components/Testimonials';

function App() {

  useEffect(() => {
    document.title = 'Brye Grahn';
    AOS.init();
  }, []);

  return (
    <div className = "bg-dark-1 ">
      <header class="sticky top-0 z-50"><Navbar /></header>
      
      <div className="px-6 lg:px-20 xl:px-36">
      <Intro />
      <Skills />
      {/* <Honors /> */}
      {/* <Certs /> */}
      {/* <Testimonials /> */}   
    </div>
    <Footer />
    </div>
  );
}

export default App;
