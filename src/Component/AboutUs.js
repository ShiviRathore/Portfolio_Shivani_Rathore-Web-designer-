import React from 'react'
import { NavLink } from 'react-router-dom'
import resume from "../pdf/resume-shivani-rathore.pdf"


function AboutUs() {
    return (
        <div>
            <section className="bg-[#122E43] py-[90px]" id='about'>
                <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
                    <div className='flex gap-[90px] items-center'>
                        <div className='w-1/2'>
                             <img src="images/my-img1.jpg" alt="" className=' flex justify-center border-[#0488CC] border-l-8 border-b-8 size-[400px]' data-aos="zoom-in" />
                        </div>
                        <div className='w-1/2'>
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-bold mb-4 text-left text-white" data-aos="flip-left">
                                About <span className="text-blue-400">Me</span>
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-300 text-left" data-aos="fade-left">
                                Hello I am <span className="font-semibold text-[#0488CC]">Shivani Rathore, </span>a passionate Web Designer with over 2+  
                                years of experience  crafting responsive websites and user-friendly interfaces. I specialize in HTML, CSS, Sass Css, JavaScript, Bootstrap, Jquery, React and modern tools like Tailwind CSS and Figma. Photoshop
                                 My design approach is clean, functional, and user-centered. I love transforming ideas into pixel-perfect web experiences that not only look great but also perform efficiently across all devices.
                            </p>

                            <div className="mt-6 space-y-2 text-sm text-left text-gray-300 animate__animated animate__fadeInUp">
                                <p>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Name:</strong> Shivani
                                </p>
                                <p>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Email:</strong> shivani.rathore039@gmail.com
                                </p>
                                <p>
                                    <strong className='text-[#0488CC] w-[81px] inline-block'>Contact:</strong> 7222378667
                                </p>
                            </div>

                            <div className="mt-6 flex gap-4">
                                <a className="bg-[#0488CC] px-6 py-2 rounded-full text-white text-sm font-bold hover:bg-white hover:text-sky-500">
                                    Hire me  
                                </a>
                                <a href={resume}
                                download="resume-shivani-rathore.pdf"
                                 className="bg-white text-[#0488CC] border border-white px-6 py-2 rounded-full text-sm font-bold hover:bg-sky-500 hover:text-white border-none cursor-pointer">
                                    Download CV
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs
