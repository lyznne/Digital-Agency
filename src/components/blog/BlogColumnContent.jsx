import React from 'react';
import Pagination from '../others/Pagination';
import BlogColumnData from '../../jsonData/BlogColumnData.json'
import SingleBlogColumn from './SingleBlogColumn';

const BlogColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {BlogColumnData.slice(0, 4).map(blog =>
                            <div className="col-lg-6 mb-50" key={blog.id}>
                                <SingleBlogColumn blog={blog} />
                            </div>
                        )}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default BlogColumnContent;
