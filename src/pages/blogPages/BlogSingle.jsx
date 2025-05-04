import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import BlogSingleContent from '../../components/blog/BlogSingleContent';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import BlogData from '../../jsonData/BlogData.json'

const BlogSingle = () => {

    const { id } = useParams()
    const data = BlogData.filter(blog => blog.id === parseInt(id))[0]

    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="blog-single" title1="Blog Grid" bottomSpace="pb-0" offsetClass="offset-lg-1" />
            <BlogSingleContent blogInfo={data} />
            <Footer />
        </>
    );
};

export default BlogSingle;
