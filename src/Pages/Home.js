import React from 'react';
import Header from '../Component/Header'
import Banner from '../Component/Banner';
import AboutUs from '../Component/AboutUs';
import MyJourney from '../Component/MyJourney';
import Service from '../Component/Service';
import MySkill from '../Component/MySkill';
import Projects from '../Component/Projects';
import ContactMe from '../Component/ContactMe';
import Footer from '../Component/Footer';
import WOW from 'wowjs';


function Home() {
    return (
        <div>
            <div >
                <Header/>
                <Banner />
                <AboutUs/>
                <MyJourney/>
                <Service/>
                <MySkill/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;


