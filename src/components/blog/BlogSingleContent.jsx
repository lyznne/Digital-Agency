import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BlogForm from './BlogForm';
import BlogComment from './BlogComment';
import BlogPostPagination from './BlogPostPagination';
import BlogTagsShare from './BlogTagsShare';
import BlogPostAuthor from './BlogPostAuthor';
import BlogPostContent from './BlogPostContent';

const BlogSingleContent = ({ blogInfo }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="blog-area single full-blog full-blog default-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        <div
                            className="blog-content col-lg-10 offset-lg-1 col-md-12"
                            data-aos="fade-up"
                        >
                            <BlogPostContent blogInfo={blogInfo} />
                            <BlogPostAuthor />
                            <BlogTagsShare />
                            <BlogPostPagination />
                            <div className="blog-comments">
                                <div className="comments-area">
                                    <BlogComment blogInfo={blogInfo} />
                                    <BlogForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingleContent;
