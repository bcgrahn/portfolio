import './App.css';
import {useEffect} from 'react'
import Home from "./routes/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.title = 'Brye Grahn';
    AOS.init();
  }, []);

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
