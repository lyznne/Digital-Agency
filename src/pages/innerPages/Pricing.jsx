import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Price from '../../components/price/Price';
import ProjectDeal from '../project/ProjectDeal';
import Footer from '../../components/footer/Footer';

const Pricing = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="pricing" title1="Committed to" title2="giving the best price" bottomSpace="pb-0" />
            <Price />
            <ProjectDeal />
            <Footer />
        </>
    );
};

export default Pricing;
