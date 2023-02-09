import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/AboutPage";
import Home from "./routes/HomePage";
import NavbarPage from './components/NavbarPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavbarPage />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
