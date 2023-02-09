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

function App() {

  useEffect(() => {
    document.title = 'Brye Grahn';
    AOS.init();
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Intro />
      <Skills />
      {/* <Honors /> */}
      {/* <Certs /> */}
      <Footer />
    </div>


    // <div className="App">
    //   <header className="App-header">
    //    <NavbarPage />
    //    <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    //   </header>
    // </div>
  );
}

export default App;
