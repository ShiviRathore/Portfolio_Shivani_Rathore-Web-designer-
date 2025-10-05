import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (   
        <>
        <section className='bg-[#081B29]  pb-[100px] pt-[120px]' id='home'>
            <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className="w-[60%]">
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold text-white text-left mb-3'>I Am <span className='text-[#0488CC] text-[36px] ml-3' data-aos="zoom-in"> Shivani Rathore</span></h2>
                        <h1 className="text-[36px] font-bold mb-4 text-white text-left pl-5 " data-aos="fade-up">
                            Web Designer
                        </h1>
                    </div>
                    </div>
                    <div className='w-[40%]'>
                    <div className='flex justify-end'>
                      <img src="images/my-img1.jpg" alt="" className=' flex justify-center border-[#0488CC] border-r-8 border-b-8 size-[400px]'  data-aos="zoom-in" />
                    </div>
                    </div>
                </div>
            </div> 
        </section>  
        </>
    )
}

export default Banner;

