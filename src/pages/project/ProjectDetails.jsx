import React from 'react';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectDetailsContent from '../../components/project/ProjectDetailsContent';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import ProjectData from '../../jsonData/ProjectData.json'
import Header from '../../components/header/Header';
const ProjectDetails = () => {

    const { id } = useParams()
    const data = ProjectData.filter(project => project.id === parseInt(id))[0]

    return (
        <>
            <Header />
            <BreadCrumb breadCrumb="project-details" title1="Search engine optimization (SEO)" bottomSpace="pb-0" />
            <ProjectDetailsContent projectInfo={data} />
            <Footer />
        </>
    );
};

export default ProjectDetails;
