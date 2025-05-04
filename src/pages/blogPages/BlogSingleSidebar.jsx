import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogSingleSidebarContent from '../../components/blog/BlogSingleSidebarContent';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import BlogData from '../../jsonData/BlogData.json'

const BlogSingleSidebar = () => {

    const { id } = useParams()
    const data = BlogData.filter(blog => blog.id === parseInt(id))[0]

    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-single-sidebar" title1="Blog Single Sidebar" bottomSpace="pb-0" />
            <BlogSingleSidebarContent blogInfo={data} />
            <Footer />
        </>
    );
};

export default BlogSingleSidebar;
