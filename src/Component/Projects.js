import React from 'react'
import { NavLink } from 'react-router-dom';
import dashboard from "../images/dashboard1.png"
import frs from "../images/frs 2.png";
import qbit from "../images/qbit-ai 1.png";
import project from "../images/project 1.png";
import quickpay from "../images/quick-pay.png"
import seeya from "../images/seeya-app2.png"

function Projects() {
  return (
    <div>
      <div className='bg-[#122E43] text-white lg:py-[90px] py-[40px]' id='projects'>
        <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
          <h4 className='text-white md:mb-12 mb-8 md:text-4xl text-3xl font-bold' data-aos="flip-right">
            My <span className='text-sky-500'>Projects</span>
          </h4>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-6 gap-4 md:w-full sm:w-[80%] mx-auto w-full'>
  {/* TOURYSTA Project */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={project} alt="TOURYSTA Project" className='w-full xs:xs:h-[300px] h-[200px] h-[200px] rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">TOURYSTA Project</h3>
                <p className="text-lg mb-4">React js, Bootstrap</p>
                <a href="https://tourysta.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project</a>
              </div>
            </div>
            {/* AIM Project */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={dashboard} alt="AIM Project" className='w-full xs:xs:h-[300px] h-[200px] rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">AIM Project</h3>
                <p className="text-lg mb-4">React js, Bootstrap</p>
                <NavLink to="https://armoryinventorymanagement.com/super-admin/login" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project</NavLink>
              </div>
            </div>

            {/* FRS Project */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={frs} alt="FRS Project" className='w-full xs:xs:h-[300px] h-[200px] h-[200px] rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">FRS Project</h3>
                <p className="text-lg mb-4">HTML, Tailwind CSS</p>
                <NavLink to="https://frs.bestpeers.com/en/admin_users/sign_in" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project</NavLink>
              </div>
            </div>

            {/* QBIT Project */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={qbit} alt="QBIT Project" className='w-full xs:xs:h-[300px] h-[200px] h-[200px] rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">QBIT Project</h3>
                <p className="text-lg mb-4">React js, Tailwind CSS</p>
                <NavLink to="https://qbit42.ai/" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold transition text-sm">View Project</NavLink>
              </div>
            </div>

          
              {/* Seeya Project */}
            <div className='relative group overflow-hidden border-4 border-[#0488CC] rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={seeya} alt="Seeya Project" className='w-full h-full object-cover rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">Seeya Project</h3>
                <p className="text-lg mb-2">HTML, CSS, JavaScript, jQuery</p>
                <a href="https://dev.seeyafit.co.il/administrator/login" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold hover:bg-[#026b9c] transition text-sm">View Project</a>
              </div>
            </div>
            {/* QuickPay Figma Project */}
            <div className='relative group overflow-hidden border-4 border-sky-400 rounded-xl p-2 hover:scale-105 transition-transform duration-300 xs:h-[300px] h-[200px]'>
              <img src={quickpay} alt="QuickPay Figma Project" className='w-full h-full object-cover rounded-xl' />
              <div className="absolute inset-0 bg-[#000000d9] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-2xl font-bold mb-2">QuickPay App</h3>
                <p className="text-lg mb-2">UI/UX Design • Figma</p>
                <p className="text-sm text-gray-300 mb-4">Payment app design with modern UI</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.figma.com/design/543zAPR733da0crEFJyPXw/quickPay?node-id=314-658&t=WwlOQcHD0mWodUMw-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[linear-gradient(27deg,rgba(30,144,255,1)_39%,rgba(82,208,255,1)_55%,rgba(30,144,255,1)_72%)] hover:shadow-[0_0_18px_rgba(30,144,255,0.8)] rounded-lg font-semibold transition text-sm">
                    View Design
                  </a>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;