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
      <section id="contact" class="bg-[#0f2537] lg:py-[90px] py-[40px]">
        <div class="container max-w-6xl mx-auto xl:px-16 px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center md:mb-12 mb-6" data-aos="flip-right">
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
            <div className="bg-[#102a3b] p-6 rounded-lg shadow-xl text-white text-center">
              <h3 className="lg:text-3xl text-2xl font-bold mb-6">
                Get in <span className="text-sky-500">Touch</span>
              </h3>

              <ul className="space-y-4 max-w-[260px] w-full mx-auto text-left">
                <li>
                  <NavLink
                    to="mailto:shivanirathore093@gmail.com"
                    className="hover:text-sky-500 flex items-center gap-3"
                  >
                    <FaMessage className="text-sky-500 text-lg" />
                    <span className='md:text-base text-sm'>shivanirathore093@gmail.com</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/shivani-rathore-84824020a/"
                    className="hover:text-sky-500 flex items-center gap-3"
                  >
                    <FaLinkedin className="text-sky-500 text-lg" />
                    <span className='md:text-base text-sm'>linkedin.com/in/shivani-rathore-84824020a</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://github.com/ShiviRathore/"
                    className="hover:text-sky-500 flex items-center gap-3"
                  >
                    <FaGithub className="text-sky-500 text-lg" />
                    <span className='md:text-base text-sm'>github.com/ShiviRathore</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="tel:+917225856984"
                    className="hover:text-sky-500 flex items-center gap-3"
                  >
                    <FaPhoneAlt className="text-sky-500 text-lg" />
                    <span className='md:text-base text-sm'>+91 72258 56984</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="#"
                    className="hover:text-sky-500 flex items-center gap-3"
                  >
                    <FaMapMarkerAlt className="text-sky-500 text-lg" />
                    <span className='md:text-base text-sm'>Indore, Madhya Pradesh, India</span>
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
