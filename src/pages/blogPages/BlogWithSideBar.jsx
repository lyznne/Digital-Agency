import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogWithSideBarContent from '../../components/blog/BlogWithSideBarContent';
import Footer from '../../components/footer/Footer';

const BlogWithSideBar = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-with-sidebar" title1="Blog Sidebar" bottomSpace="pb-0" />
            <BlogWithSideBarContent />
            <Footer />
        </>
    );
};

export default BlogWithSideBar;
