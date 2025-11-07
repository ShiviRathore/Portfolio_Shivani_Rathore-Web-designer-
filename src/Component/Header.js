import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../images/shivani-logo.png"


function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
 
  return (
    <div className="bg-[#0a1424] fixed w-full top-0 left-0 right-0 z-10">
      <header className="container max-w-6xl mx-auto xl:px-16 px-8">
        <nav className="border-gray-200 py-4">
          <div className="flex flex-wrap justify-between items-center relative">
            <div className="flex justify-between">
              <div>
                <Link to="/" className="flex items-center">
                  <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap text-white flex items-center">
                    <img src={logo} alt="" className="size-[50px]"/> Shivani Rathore
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                  {isVisible ? (    
                  <button className="lg:!hidden flex" onClick={toggleVisibility}>              
                    <i class="fa-solid fa-xmark text-white right-0 top-[17px] absolute"></i>
                  </button>  
                   ) : (
                  <button className="lg:!hidden flex" onClick={toggleVisibility}>              
                    <i class="fa-solid fa-bars text-white right-0 top-[17px] absolute"></i>
                  </button>   
                   )}
                    
                <ul className="lg:!flex hidden flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white rounded lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Home   
                    </Link>
                  </li>
                  <li>
                    <Link   
                      to="about"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="service"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Service
                    </Link>
                  </li>
                  <li> 
                    <Link
                      to="journey"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skill"
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Skill
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    > 
                      Contact
                    </Link>
                  </li>
                </ul>
                {isVisible && (
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white rounded lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="service"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="journey"
                      smooth={true}
                      duration={500}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skill"
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Skill
                    </Link>
                  </li> 
                  <li>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      className="block py-2 pr-4 pl-3 text-white lg:p-0 text-base cursor-pointer hover:text-sky-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                )}
            </div>
          </div>    
        </nav>
      </header>
    </div>
  );
}

export default Header;

