import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import './Page.css';
import HR from '../components/HR';

const HomePage = () => {

    return (
        <div class="bggradient">
            <div class = "overlay">
            <header class="sticky top-0 z-50"><Navbar /></header></div>
            <div className="px-6 lg:px-20 xl:px-36">
                <Intro />
                <HR />
                <Skills />
                <HR />
                {/* <Honors /> */}
                {/* <Certs /> */}
                {/* <Testimonials /> */}
            </div>
            <Footer />
            
        </div>
    )
}
export default HomePage;




