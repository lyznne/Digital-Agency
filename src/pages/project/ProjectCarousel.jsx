import React from 'react';
import Header from '../../components/header/Header';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectCarouselContent from '../../components/project/ProjectCarouselContent';
import Footer from '../../components/footer/Footer';

const ProjectCarousel = () => {
    return (
        <>
            <Header />
            <BreadCrumb breadCrumb="project-carousel" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
            <ProjectCarouselContent />
            <Footer />
        </>
    );
};

export default ProjectCarousel;
