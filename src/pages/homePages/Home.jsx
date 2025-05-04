import React from 'react';
import { useEffect } from 'react';

import Banner from '../../components/banner/Banner';

import About from '../../components/about/About';

import Services from '../../components/services/Services';

import Testimonial from '../../components/testimonial/Testimonial';
import WhyChooseUs from '../../components/whyChoose/WhyChooseUs';
import Team from '../../components/team/Team';
import Experience from '../../components/experience/Experience';
import Brand from '../../components/brand/Brand';
import Contact from '../../components/contact/Contact';
import Blog from '../../components/blog/Blog';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Home = () => {

        useEffect(() => {
            document.body.classList.add('bg-dark');

            return () => {
                document.body.classList.remove('bg-dark');
            };
        }, []);

    return (
        <>
            <div className="wrapper">
                         {/* <Header logoColor={true} /> */}
                <Header />
                <Banner />
                <About />
                <Services />
                <Testimonial />
                <WhyChooseUs />
                <Team />
                <Experience />
                <Brand />
                <Contact />
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default Home;
