import React, { useEffect } from 'react';
import footerVideo from '../assets/footerVideo.mp4';
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css'

function Footer() {

    function copyright() {
        const currentYear = new Date().getFullYear();
        return (
            `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class="fa-brands fa-github"></a></i>`
        );
    };

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={footerVideo} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div data-aos='fade-up' className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input data-aos='fade-up' type='text' placeholder='Enter Email Address' />
                        <button data-aos='fade-up' className='btn flex'>
                            Send <FiSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className='footerCard flex'>
                    <div className='footerIntro flex'>

                        <div className='logoDiv'>
                            <a href='#' className='logo flex'>
                                <MdOutlineTravelExplore className='icon' />
                                Travel.
                            </a>
                        </div>

                        <div data-aos='fade-up' className='footerParagraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>

                        <div data-aos='fade-up' className='footerSocials'>
                            <AiOutlineTwitter className='icon' />
                            <AiFillYoutube className='icon' />
                            <AiFillInstagram className='icon' />
                            <FaTripadvisor className='icon' />
                        </div>

                    </div>
                    <div className='footerLinks grid'>
                            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup'>
                                <span className='groupTitle'>
                                    Our Agency
                                </span>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Services
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Insurance
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Agency
                                </li>
                                
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Tourism
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Payment
                                </li>
                            </div>

                            <div data-aos='fade-up' data-aos-duration='4000' className='linkGroup'>
                                <span className='groupTitle'>
                                    Partners
                                </span>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Booking
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Hertz
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Marriot
                                </li>
                                
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Trivago
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    TripAdvisor
                                </li>
                            </div>

                            <div data-aos='fade-up' data-aos-duration='5000' className='linkGroup'>
                                <span className='groupTitle'>
                                    Last Minute
                                </span>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    London
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    California
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Indonesia
                                </li>
                                
                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Europe
                                </li>

                                <li className='footerList flex'>
                                    <FiChevronRight className='icon' />
                                    Oceania
                                </li>
                            </div>
                        </div>

                    <div className='footerDiv flex'>
                        <p dangerouslySetInnerHTML={{ __html: copyright() }}></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;