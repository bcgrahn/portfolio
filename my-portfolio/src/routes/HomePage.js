import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import './Page.css';
import HR from '../components/HR';

import { useRive } from "rive-react";


const HomePage = () => {

    const { rive, RiveComponent } = useRive({
        src: "../../public/run.riv",
        autoplay: true,
    });

    return (
        <div class="bggradient">
            <RiveComponent onMouseOver={() => rive.play()} />
            <header class="sticky top-0 z-50"><Navbar /></header>

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




