import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesGrid from '../../components/services/ServicesGrid';
import About from '../../components/about/About';
import Price from '../../components/price/Price';
import Testimonial from '../../components/testimonial/Testimonial';
import ProjectDeal from '../project/ProjectDeal';
import Footer from '../../components/footer/Footer';
import HeaderV5 from '../../components/header/HeaderV5';

const Services = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV5 />
                <BreadCrumb breadCrumb="services" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                <ServicesGrid />
                <About />
                <Price priceClass="bg-gray default-padding" />
                <Testimonial />
                <ProjectDeal />
                <Footer />
            </div>
        </>
    );
};

export default Services;
