import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-scroll";
import myimg from "../images/my-img.png"
import bgVideo from "../images/video1.mp4";

function Banner() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className=' md:pt-[60px] pt-[60px]' id='home'>

                {/* <div className='flex flex-col md:flex-row items-center justify-center lg:gap-10 gap-4'>
                        <div className="md:w-1/2 w-full">
                            <div className='text-center'>
                                <p className='text-xl text-white md:text-left text-center font-bold mb-4'>HELLO</p>
                                <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-white md:text-left text-center mb-3'> I Am <span className='text-[#0488CC] md:text-[36px] sm:text-[30px] text-xl md:ml-3 ml-0' data-aos="zoom-in"> Shivani Rathore</span></h2>
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
                    </div> */}
                <div className="video-container relative lg:h-screen h-[460px] w-full overflow-hidden">
                    <video
                        className="background-video w-full h-screen"
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                  
                    <div className="container max-w-6xl mx-auto xl:px-16 px-8 h-full">
                        <div className="video-overlay">
                            <div className='text-center absolute md:top-[20%] top-[13%]'>
                                <p className='sm:text-xl text-base text-white text-center font-bold lg:mb-5 mb-0'>HELLO</p>
                                <h2 className='lg:text-3xl text-2xl font-bold text-white text-center md:p-2 p-0 lg:mb-3 mb-2 flex md:gap-4 gap-2 justify-center items-center'> I Am <span className='heading-name md:p-2 p-0 md:text-[45px] sm:text-[30px] text-xl md:ml-3 ml-0 flex gap-2 justify-center' data-aos="zoom-in">
                                   
                                    Shivani Rathore</span>
                                </h2>
                                <h1 className="lg:text-[40px] md:text-[28px] text-xl font-bold md:mb-6 mb-0 text-white " data-aos="fade-up">
                                    <span className='text-[#0488CC] md:text-[30px] text-[22px] md:ml-3 ml-0 font-bold heading-name'> Creative </span>
                                    Web Designer
                                </h1>
                                <p class="text-gray-300 md:my-10 my-6 text-center xs:text-sm text-xs md:max-w-[66%] w-full mx-auto">
                                  I create modern, responsive, and user-friendly websites with clean design and smooth user experience. I enjoy turning ideas into beautiful, functional digital interfaces using HTML, CSS, Tailwind CSS, and front-end frameworks.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="projects"  
                                        className=" bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)]  text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 cursor-pointer"
                                    >
                                        View My Work
                                    </Link>
                                    <Link
                                        to="contact"
                                        className=" bg-white text-[#0488CC] hover:bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:text-white font-medium py-2 px-6 rounded-full transition duration-300 cursor-pointer"
                                    >
                                        Contact Me
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;

