import React from 'react'
import { NavLink } from 'react-router-dom';

function Projects() {
  return (
    <>
      <div className='bg-[#122E43] text-white lg:py-[90px] py-[50px]' id='projects'>
        <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
          <h4 className='text-white mb-12 md:text-4xl text-3xl font-bold' data-aos="flip-right">My <span className='text-sky-500'>Projects</span></h4>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 md:w-full'>
           {/* <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
              <img src="images/project1.png" alt="" className='lg:w-[397px] w-full h-[225px] rounded-xl' />
               <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">MYTket Project</h3>
                  <p className="text-sm mb-4">React js, Tailwind CSS</p>
                 <NavLink to="http://65.2.9.94:3000/login?organizationName=" className="px-4 py-2 bg-[#0488CC] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project </NavLink>
                </div>
            </div> */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
              <img src="images/dashboard.png" alt="" className='lg:w-[397px] w-full h-[225px] rounded-xl' />
               <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">AIM Project</h3>
                  <p className="text-sm mb-4">React js, Bootstrap</p> 
                 <NavLink to="http://65.2.9.94:3000/login?organizationName=" className="px-4 py-2 bg-[#0488CC] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project </NavLink>
                </div>
            </div>            
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
             <img src="images/qbit-ai.png" alt="" className='lg:w-[397px] w-full h-[225px] rounded-xl' />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">QBIT Project</h3>
                  <p className="text-sm mb-4">React js, Tailwind CSS</p> 
                   <NavLink to="https://qbit42.ai/" className="px-4 py-2 bg-[#0488CC] rounded-lg font-semibold hover:bg-[#026b9c] transition  text-sm">View Project </NavLink>
                </div>
            </div> 
            <div class="relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300">
                <img src="images/frs.png" alt="" className='lg:w-[397px] w-full h-[225px] rounded-xl' />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">FRS Project</h3>
                  <p className="text-sm mb-4">HTML, Tailwind CSS</p>
                   <NavLink to="https://surveillance.bestpeers.com/admin_users/sign_in" className="px-4 py-2 bg-[#0488CC] rounded-lg font-semibold hover:bg-[#026b9c] transition  text-sm">View Project </NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
