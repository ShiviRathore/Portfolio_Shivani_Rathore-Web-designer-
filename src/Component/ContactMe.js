import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaMessage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContactMe() {
  return (
    <div>
      <section id="contact" class="bg-[#0f2537] py-16">
        <div class="container max-w-6xl mx-auto xl:px-16 px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12" data-aos="flip-right">
            Contact <span class="text-sky-500">Me</span>
          </h2>
          <div class="grid md:grid-cols-2 gap-10">

            <div class="bg-[#102a3b] p-6 rounded-lg shadow-xl">
              <form action="#" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" class="w-full px-4 py-3 bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Phone Number" class="w-full px-4 py-3 bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  <input type="text" placeholder="Address" class="w-full px-4 py-3 bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <textarea rows="5" placeholder="Message" class="w-full px-4 py-3 bg-transparent border border-sky-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                <button type="submit" class="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md font-semibold transition duration-300">
                  Submit
                </button>
              </form>
            </div>
            <div class="bg-[#102a3b] p-6 rounded-lg shadow-xl text-white">
              <h3 class="text-3xl font-bold mb-6 max-w-[50%] mx-auto my-6">Get in <span class="text-sky-500">Touch</span></h3>
              <ul class="space-y-4 max-w-[71%] mx-auto pt-8">
                <li className='text-left'>
                  <NavLink to="mailto:shivanirathore093@gmail.com" className="hover:text-sky-500 flex justify-start items-center gap-3">
                    <FaMessage />
                    shivanirathore093@gmail.com
                  </NavLink>
                </li>
                <li className='text-left'>
                  <NavLink to="https://www.linkedin.com/in/shivani-rathore-84824020a/" className="hover:text-sky-500 flex justify-start items-center gap-3">
                    <FaLinkedin />
                    linkedin.com/in/shivani-rathore-84824020a
                  </NavLink>
                </li>
                <li className='text-left'>
                  <NavLink to="tel:+917225856984" className="hover:text-sky-500 flex justify-start items-center gap-3">
                    <FaPhoneAlt />
                    +917225856984
                  </NavLink>
                </li>
                <li className='text-left'>
                   <NavLink to="tel:+917225856984" className="hover:text-sky-500 flex justify-start items-center gap-3">
                      <FaMapMarkerAlt /> indore, Madhya Pradesh, India
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
