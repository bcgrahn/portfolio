import React, { useState } from "react";
import logo from '../assets/rabbit.png';
import resume from "../assets/resume.pdf";
import { Dropdown } from 'flowbite-react';
import "./Component.css";
import { Squash as Hamburger } from 'hamburger-react'


export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    const [isActive] = useState(false);

    function toggleDiv() {
        var div = document.getElementById("ham-controller");
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }

    return (
        <div className="pt-3 px-5 md:px-5 lg:pt-5 lg:px-10">
            <nav class="">
                <div class="navGlassCard py-1 px-4 md:py-0">
                    <div className="flex justify-between items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
                            <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                        </svg>
                        {/* <img src={logo} className="App-logo w-10 rounded-full" alt="logo" /> */}

                        <ul className="hidden md:flex">
                            <li className="p-4">
                                <a href="#home" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    About
                                </a>
                            </li>
                            <li className="p-4">
                                <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Skills
                                </a>
                            </li>
                            <li className="p-4">
                                <a href="#honors" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Honor & Awards
                                </a>
                            </li>
                            <li className="p-4">
                                <a href="#certs" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Certfications
                                </a>
                            </li>
                        </ul>

                        <a href={resume} rel="noreferrer" target="_blank" className="hidden md:flex">
                            <button class="glass-button">Resume</button></a>

                        <div onClick={toggleDiv} className="md:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                        </div>

                    </div>
                </div>
            </nav>

            {/* Hamburger menu */}
            <div id="ham-controller" class="ham-menu-container">
                <nav>
                    <div className="">
                        <ul class="primary-navigation hamGlassCard ">
                            <li className="p-1 pt-4">
                                <a onClick={toggleDiv} href="#home" className="text-sm block py-1 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="inline-block bi bi-person-vcard-fill" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                                    </svg> &nbsp; About
                                </a>
                            </li>
                            <li className="p-1">
                                <a onClick={toggleDiv} href="#skills" className="text-sm block py-1 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="inline-block bi bi-lightbulb" viewBox="0 0 16 16">
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                    </svg>
                                    &nbsp; Skills
                                </a>
                            </li>
                            <li className="p-1">
                                <a onClick={toggleDiv} href="#honors" className="text-sm block py-1 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="inline-block bi bi-award" viewBox="0 0 16 16">
                                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                    </svg>
                                    &nbsp; Awards
                                </a>
                            </li>
                            <li className="p-1">
                                <a onClick={toggleDiv} href="#certs" className="text-sm block py-1 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="inline-block bi bi-mortarboard" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                                    </svg>
                                    &nbsp; Certfications
                                </a>
                            </li>
                            <li onClick={toggleDiv} className="pt-10 pb-2">
                                <a href={resume} rel="noreferrer" target="_blank" className="">
                                    <button class="glass-button">Resume</button></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    )
}

//Functions


