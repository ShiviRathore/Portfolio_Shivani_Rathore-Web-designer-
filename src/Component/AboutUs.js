import React from 'react'
import { NavLink } from 'react-router-dom'
import resume from "../pdf/resume-shivani-rathore.pdf"


function AboutUs() {
    return (
        <div>
            <section className="bg-[#122E43] lg:py-[90px] py-[40px]" id='about'>
                <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                        <div className='md:w-1/2 w-full md:order-first order-last'>
                        <div className='flex md:!justify-start justify-center'>
                             <img src="images/my-img.png" alt="" className=' flex justify-center border-[#0488CC] border-l-8 border-b-8 xs:h-[400px] h-full' data-aos="zoom-in" />
                        </div>
                        </div>
                        <div className='md:w-1/2 w-full'>                        
                            <h2 className="md:text-4xl text-3xl font-bold mb-4 md:text-left text-center text-white" data-aos="flip-left">
                                About <span className="text-blue-400">Me</span>
                            </h2>
                            <p className="xs:text-sm text-xs leading-relaxed text-gray-300 text-left" data-aos="fade-left">
                                Hello I am <span className="font-semibold text-[#0488CC]">Shivani Rathore, </span>a passionate Web Designer with over 2+  
                                years of experience  crafting responsive websites and user-friendly interfaces. I specialize in HTML, CSS, Sass Css, JavaScript, Bootstrap, Jquery, React and modern tools like Tailwind CSS and Figma. Photoshop
                                 My design approach is clean, functional, and user-centered. I love transforming ideas into pixel-perfect web experiences that not only look great but also perform efficiently across all devices.
                            </p>

                            <div className="mt-6 space-y-2 text-sm text-left text-gray-300 animate__animated animate__fadeInUp md:pl-0 ">
                                <p className='flex text-sm'>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Name:</strong> Shivani Rathore
                                </p>
                                 <p className='flex text-sm'>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Email:</strong> shivanirathore093@gmail.com
                                </p>
                                 <p className='flex text-sm'>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Contact:</strong> 7225856984
                                </p>
                            </div>

                            <div className="mt-6 flex md:gap-4 gap-2">
                                <a className="bg-[#0488CC] md:px-6 px-4 py-2 rounded-full text-white text-sm font-bold hover:bg-white hover:text-sky-500">
                                    Hire me  
                                </a>
                                <a href={resume}
                                download="resume-shivani-rathore.pdf"
                                 className="bg-white text-[#0488CC] border border-white md:px-6 px-4 py-2 rounded-full text-sm font-bold hover:bg-sky-500 hover:text-white border-none cursor-pointer">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs
