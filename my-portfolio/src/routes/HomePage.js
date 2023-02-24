import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Simple from '../components/Car';


const HomePage = () => {
    return (
        <div className="bg-dark-1 ">
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
    )
}
export default HomePage;




