import React from 'react';
import Header from '../../components/header/Header';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectColumnContent from '../../components/project/ProjectColumnContent';
import Footer from '../../components/footer/Footer';

const Project2Column = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <BreadCrumb breadCrumb="project-2-column" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
                <ProjectColumnContent columns="colums-2" />
                <Footer />
            </div>
        </>
    );
};

export default Project2Column;
