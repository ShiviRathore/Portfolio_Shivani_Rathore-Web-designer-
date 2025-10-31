import React from 'react';
import { PenTool, Code, Smartphone, Palette, Monitor, Wrench } from "lucide-react";

function Service() {

    const service = [
        {
            icon: <i className="fa-solid fa-desktop w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Web Design",
            description: "I create modern, responsive, and visually appealing website designs that align with your brand identity and engage users effectively."
        },
        {
            icon: <i className="fa-solid fa-code w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Web Development",
            description: "I develop fast, secure, and scalable websites using the latest technologies, ensuring a smooth experience across all devices."
        },
        {
            icon: <i className="fa-solid fa-mobile-screen-button w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Mobile-Friendly Design",
            description: "I design and develop websites optimized for mobile devices, ensuring seamless performance and usability on any screen size."
        },
        {
            icon: <i className="fa-solid fa-pen-nib w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "UI/UX Design",
            description: "I craft intuitive and user-centered interfaces using tools like Figma and Photoshop, focusing on creating smooth and meaningful user experiences."
        },
        {
            icon: <i className="fa-solid fa-file-lines w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Landing Page Design",
            description: "I design high-converting landing pages tailored to your goals — whether it’s generating leads, driving sales, or promoting products."
        },
        {
            icon: <i className="fa-solid fa-screwdriver-wrench w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Maintenance & Support",
            description: "I provide ongoing maintenance, updates, and technical support to keep your website secure, optimized, and running efficiently."
        }
    ]
    return (
        <div>
            <section className="bg-[#122E43] text-white lg:py-[90px] py-[40px]" id='service'>
                <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                    <h2 className="text-center md:text-4xl text-3xl font-bold md:mb-12 mb-6" data-aos="flip-left">
                        Ser<span className="text-sky-500">vice</span>
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>

                        {
                            service.map((value, index) => {
                                return (
                                    <>
                                        <div key={{ index }} className='bg-white text-black lg:p-6 p-4 rounded-lg shadow hover:shadow-lg transition duration-300  border-4 border-white hover:border-sky-500 hover:border-4'>
                                           
                                            <span>{value.icon}</span>
                                            <h3 className='font-bold lg:text-lg text-base mb-2'>{value.title}</h3>
                                            <p className='lg:text-base text-sm'>{value.description}</p>
                                        </div>
                                    </>
                                )

                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
