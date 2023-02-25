import './App.css';
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Link,
  useLocation, Routes
} from "react-router-dom";
import Home from "./routes/HomePage";
import WelcomePage from './routes/WelcomePage';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    document.title = 'Brye Grahn';
    AOS.init();
  }, []);

  return (
    <div>
      <Content />
    </div>
  );
}

function Content() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="fadeIn" //Enter an animation class
      >
        <Routes>
          <Route path="/details" element={<Home />} />
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}


export default App;
