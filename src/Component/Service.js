import React from 'react';
import { PenTool, Code, Smartphone, Palette, Monitor, Wrench } from "lucide-react";

function Service() {

    const service = [
        {
            icon: <i className="fa-solid fa-paintbrush w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Web Design",
            description: "UI/UX design for responsive websites, landing pages, portfolios, and business websites."
        },
        {
            icon: <i className="fa-solid fa-code w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Web Development",
            description: "Designing websites that work across all devices Mobile-first approach"
        },
        {
            icon: <i className="fa-solid fa-mobile-screen-button w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Mobile-Friendly Design",
            description: "UI/UX design for responsive websites, landing pages, portfolios, and business websites."
        },
        {
            icon: <i className="fa-solid fa-pen-nib w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "UI/UX Design",
            description: "Crafting intuitive interfaces with smooth user experiences using tools like Figma and Adobe XD."
        },
        {
            icon: <i className="fa-solid fa-file-lines w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Landing Page Design",
            description: "High-converting landing pages designed to   drive traffic, leads, or sales."
        },
        {
            icon: <i className="fa-solid fa-screwdriver-wrench w-8 text-xl text-sky-500 mx-auto mb-4"></i>,
            title: "Maintenance & Support",
            description: "Ongoing support, updates, and performance checks to keep your website running smoothly"
        }
    ]
    return (
        <div>
            <section className="bg-[#122E43] text-white py-[90px]" id='service'>
                <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                    <h2 className="text-center text-4xl font-bold mb-12"  data-aos="flip-left">
                        Ser<span className="text-sky-500">vice</span>
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>

                        {
                            service.map((value, index) => {
                                return (
                                    <>
                                        <div key={{ index }} className='bg-white text-black p-6 rounded-lg shadow hover:shadow-lg transition duration-300  border-4 border-white hover:border-sky-500 hover:border-4'>
                                            <span>{value.icon}</span>
                                            <h3 className='font-bold'>{value.title}</h3>
                                            <p className=''>{value.description}</p>
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
