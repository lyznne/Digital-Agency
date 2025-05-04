import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogColumnContent from '../../components/blog/BlogColumnContent';
import Footer from '../../components/footer/Footer';

const BlogColumn = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-column" title1="Blog Grid" bottomSpace="pb-0" />
            <BlogColumnContent />
            <Footer />
        </>
    );
};

export default BlogColumn;
