import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import myimg from "../images/my-img.png"

function Banner() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className='bg-[#081B29] md:pb-[100px] pb-[40px] md:pt-[150px] pt-[90px]' id='home'>
                <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                    <div className='flex flex-col md:flex-row items-center justify-center lg:gap-10 gap-4'>
                        <div className="md:w-1/2 w-full">
                            <div className='text-center'>
                                <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-white md:text-left text-center mb-3'>I Am <span className='text-[#0488CC] md:text-[36px] sm:text-[30px] text-xl md:ml-3 ml-0' data-aos="zoom-in"> Shivani Rathore</span></h2>
                                <h1 className="lg:text-[36px] md:text-[28px] text-xl font-bold mb-4 text-white md:text-left " data-aos="fade-up">
                                    <span className='text-[#0488CC] md:text-[30px] text-[22px] md:ml-3 ml-0 font-bold'> Creative </span>
                                    Web Designer
                                </h1>
                                <p class="text-gray-300 mb-6 text-left xs:text-sm text-xs">
                                    I design and build modern, responsive, and user-friendly websites that bring ideas to life. I’m passionate about crafting smooth user experiences and visually appealing interfaces using HTML, CSS, Tailwind CSS, and modern front-end frameworks. With a strong focus on clean design, performance, and accessibility, I turn creative concepts into interactive digital experiences. I believe every pixel has a purpose — and my goal is to design web solutions that not only look beautiful but also connect people and ideas seamlessly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start">
                                    <Link
                                        to="projects"
                                        className="bg-[#0488CC] hover:bg-[#06A0F3] text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
                                    >
                                        View My Work
                                    </Link>
                                    <Link
                                        to="contact"
                                        className="border border-[#0488CC] text-[#0488CC] hover:bg-[#0488CC] hover:text-white font-medium py-2 px-6 rounded-full transition duration-300 cursor-pointer"
                                    >
                                        Contact Me
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <div className='flex md:!justify-end justify-center'>
                                <img src={myimg} alt="" className=' flex justify-center border-[#0488CC] border-r-8 border-b-8 xs:h-[400px] h-full max-w-full' data-aos="zoom-in" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;

