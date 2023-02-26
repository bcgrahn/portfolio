import {useState} from 'react'
import profile from '../assets/profile.svg';
import spring from '../assets/spring.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Intro () {

    const [loaded, setLoaded] = useState(true);
    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={spring} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-200">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Bryce Grahn</h1>
                    <p class="py-5 text-xl font-bold text-gray-100">Information Engineer</p>
                    <p className="text-md font-light text-gray-200 ">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p>
                </div>
                <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>     
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/bcgrahn?tab=repositories' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.instagram.com/bryce_grahn/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/bryce-grahn/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            {/* <img src={hr} className="m-5 w-full md:h-2 absolute bottom-0" alt="hr" /> */}
        </div>
        </>
    )
}
