import React from 'react';

import ShowCase from '../../components/showCase/ShowCase';

import Contact from '../../components/contact/Contact';
import Blog from '../../components/blog/Blog';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Business = () => {
    return (
        <>
            <div className="wrapper">
                <Header logoColor={true} />



                <ShowCase />


                <Contact />
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default Business;
