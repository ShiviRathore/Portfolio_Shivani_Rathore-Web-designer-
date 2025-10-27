import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaMessage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function ContactMe() {
  return (
    <div>
      <section id="contact" class="bg-[#0f2537] lg:py-[90px] py-[50px]">
        <div class="container max-w-6xl mx-auto xl:px-16 px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center md:mb-12 mb-4" data-aos="flip-right">
            Contact <span class="text-sky-500">Me</span>
          </h2>
          <div class="grid md:grid-cols-2 lg:gap-10 gap-4">
            <div class="bg-[#102a3b] p-6 rounded-lg shadow-xl">
              <form action="#" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" class="w-full px-4 md:py-3 py-2 text-sm bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <input type="email" placeholder="Email" class="w-full px-4 md:py-3 py-2 text-sm bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Phone Number" class="w-full px-4 md:py-3 py-2 text-sm bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <input type="text" placeholder="Address" class="w-full px-4 md:py-3 py-2 text-sm bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <textarea rows="5" placeholder="Message" class="w-full px-4 md:py-3 py-2 text-sm bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                <button type="submit" class="w-full bg-sky-500 hover:bg-sky-600 text-white md:py-3 py-2 text-sm rounded-md font-semibold transition duration-300">
                  Submit
                </button>
              </form>
              
            </div>
            <div class="bg-[#102a3b] p-6 rounded-lg shadow-xl text-white">
              <h3 class="lg:text-3xl text-2xl font-bold mb-6 md:max-w-[50%] w-full mx-auto md:my-6 my-3">Get in <span class="text-sky-500">Touch</span></h3>
              <ul class="space-y-4 md:max-w-[71%] sm:max-w-[50%] w-full mx-auto pt-6">
                <li className='text-left'>
                  <NavLink to="mailto:shivanirathore093@gmail.com" className="hover:text-sky-500 flex justify-start items-center gap-3 md:text-base text-sm">
                    <FaMessage />
                    <span className='text-left'> shivanirathore093@gmail.com</span>
                  </NavLink>
                </li>
                <li className='text-left'>
                  <NavLink to="https://www.linkedin.com/in/shivani-rathore-84824020a/" className="hover:text-sky-500 flex justify-start items-center gap-3 md:text-base text-sm">
                    <FaLinkedin />
                    <span className='text-left'>linkedin.com/in/shivani-rathore-84824020a</span>
                  </NavLink>
                </li>
                 <li className='text-left'>
                  <NavLink to="https://github.com/ShiviRathore/" className="hover:text-sky-500 flex justify-start items-center gap-3 md:text-base text-sm">
                   <FaGithub />
                    <span className='text-left'>https://github.com/ShiviRathore/</span>
                  </NavLink>
                </li>
                <li className='text-left'>
                  <NavLink to="tel:+917225856984" className="hover:text-sky-500 flex justify-start items-center gap-3 md:text-base text-sm">
                    <FaPhoneAlt />
                    <span className='text-left'>+917225856984</span> 
                  </NavLink>
                </li>
                <li className='text-left'>
                   <NavLink to="tel:+917225856984" className="hover:text-sky-500 flex justify-start items-center gap-3 md:text-base text-sm">
                      <FaMapMarkerAlt /> 
                      <span className='text-left'>indore, Madhya Pradesh, India</span> 
                   </NavLink>
                   
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactMe;
