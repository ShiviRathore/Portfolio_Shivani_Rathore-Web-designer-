import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-scroll";
import bgVideo from "../images/video1.mp4";

function Banner() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section className=' md:pt-[60px] pt-[60px]' id='home'>

                
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
                                <h2 className='lg:text-3xl text34-2xl font-bold text-white text-center md:p-2 p-0 lg:mb-3 mb-2 flex md:gap-4 gap-2 justify-center items-center'> I Am <span className='heading-name md:p-2 p-0 md:text-[45px] sm:text-[30px] text-xl md:ml-3 ml-0 flex gap-2 justify-center' data-aos="zoom-in">   
                                    Shivani Rathore</span>
                                </h2>
                                <h1 className="lg:text-[40px] md:text-[28px] text-xl font-bold md:mb-6 mb-0 text-white " data-aos="fade-up">
                                    <span className='text-[#0488CC] md:text-[30px] text-[22px] md:ml-3 ml-0 font-bold heading-name'> Creative </span>
                                    Web/UI UX Designer
                                </h1>
                                <p class="text-gray-300 md:my-10 my-6 text-center xs:text-sm text-xs md:max-w-[66%] w-full mx-auto">
                                  I craft stunning, responsive websites and intuitive digital experiences. As a Web Designer & UI/UX Designer, I blend modern design principles with cutting-edge technology—HTML, CSS, Tailwind CSS, React, Figma (Prototyping & Wireframing)—to create pixel-perfect interfaces that engage users and drive results.
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

