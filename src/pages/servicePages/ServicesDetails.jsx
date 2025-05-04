import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesDetailsContent from '../../components/services/ServicesDetailsContent';
import Footer from '../../components/footer/Footer';
import ServiceData from '../../jsonData/ServiceData.json'
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {

    const { id } = useParams()
    const data = ServiceData.filter(service => service.id === parseInt(id))[0]

    return (
        <>
            <div className="wrapper">
                <HeaderV5 />
                <BreadCrumb breadCrumb="services-details" title1="Turn Information" title2="Into Actionable Insights" bottomSpace="pb-0" />
                <ServicesDetailsContent serviceInfo={data} />
                <Footer />
            </div>
        </>
    );
};

export default ServicesDetails;
