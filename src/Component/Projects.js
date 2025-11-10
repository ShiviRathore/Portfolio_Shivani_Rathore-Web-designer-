import React from 'react'
import { NavLink } from 'react-router-dom';
import dashboard from "../images/dashboard.png"
import frs from "../images/frs.png" ;
import qbit from "../images/qbit-ai.png";
import project from "../images/project.png"
function Projects() {
  return (
    <>
      <div className='bg-[#122E43] text-white lg:py-[90px] py-[40px]' id='projects'>
        <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
          <h4 className='text-white md:mb-12 mb-8 md:text-4xl text-3xl font-bold' data-aos="flip-right">My <span className='text-sky-500'>Projects</span></h4>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-8 gap-4 md:w-full sm:w-[80%] mx-auto w-full'>        
              <div className='relative group overflow-hidden border-4 border-[rgb(4,136,204)] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
                <img src={dashboard} alt="" className=' w-full xs:h-[300px] h-[200px] rounded-xl' />
                <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">AIM Project</h3>
                    <p className="text-lg mb-4">React js, Bootstrap</p> 
                  <NavLink to="http://65.2.9.94:3000/login?organizationName=" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project </NavLink>
                  </div>
              </div>            
              <div class="relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300">
                  <img src={frs} alt="" className=' w-full xs:h-[300px] h-[200px] rounded-xl' />
                  <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">FRS Project</h3>
                    <p className="text-lg mb-4">HTML, Tailwind CSS</p>
                    <NavLink to="https://surveillance.bestpeers.com/admin_users/sign_in" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition  text-sm">View Project </NavLink>
                  </div>
              </div>
                <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
              <img src={qbit} alt="" className=' w-full xs:h-[300px] h-[200px] rounded-xl' />
                <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">QBIT Project</h3>
                    <p className="text-lg mb-4">React js, Tailwind CSS</p> 
                    <NavLink to="https://qbit42.ai/" className="px-4 py-2 hover:bg-[#026b9c] bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold  transition  text-smbg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)]">View Project </NavLink>
                  </div>
              </div> 
                <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300'>
                <img src={project} alt="" className=' w-full xs:h-[300px] h-[200px] rounded-xl' />
                <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">TOURYSTA Project</h3>
                    <p className="text-lg mb-4">React js, Bootstrap</p>
                  <NavLink to="https://tourysta.com/" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold transition text-sm">View Project </NavLink>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
