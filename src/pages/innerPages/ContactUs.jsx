import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Footer from '../../components/footer/Footer';
import ContactReverse from '../../components/contact/ContactReverse';

const ContactUs = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="contact-us" title1="Get in touch with us" bottomSpace="pb-0" />
            <ContactReverse />
            <Footer />
        </>
    );
};

export default ContactUs;
