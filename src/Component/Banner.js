import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (   
        <>
        <section className='bg-[#081B29] md:pb-[100px] pb-[50px] md:pt-[120px] pt-[90px]' id='home'>
            <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                <div className='flex flex-col md:flex-row items-center justify-center lg:gap-10 gap-4'>
                    <div className="md:w-1/2 w-full">
                    <div className='text-center'>
                        <h2 className='lg:text-3xl md:text-2xl text-xl font-bold text-white md:text-left text-center mb-3'>I Am <span className='text-[#0488CC] md:text-[36px] text-[28px] md:ml-3 ml-0' data-aos="zoom-in"> Shivani Rathore</span></h2>
                        <h1 className="lg:text-[36px] text-[30px] font-bold mb-4 text-white md:text-left text-center pl-5 " data-aos="fade-up">
                            Web Designer
                        </h1>
                    </div>
                    </div>
                    <div className='md:w-1/2 w-full'>
                    <div className='flex md:!justify-end justify-center'>
                      <img src="images/my-img.png" alt="" className=' flex justify-center border-[#0488CC] border-r-8 border-b-8 md:h-[400px] max-w-full h-full'  data-aos="zoom-in" />
                    </div>
                    </div>
                </div>
            </div> 
        </section>  
        </>
    )
}

export default Banner;

