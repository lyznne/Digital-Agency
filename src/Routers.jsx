import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/homePages/Home';
import Error404 from './pages/innerPages/Error404';
import ContactUs from './pages/innerPages/ContactUs';
import ServicesDetails from './pages/servicePages/ServicesDetails';
import Team from './pages/teamPages/Team';
import TeamDetails from './pages/teamPages/TeamDetails';
import Pricing from './pages/innerPages/Pricing';
import Services from './pages/servicePages/Services';

import BlogStandard from './pages/blogPages/BlogStandard';
import BlogWithSideBar from './pages/blogPages/BlogWithSideBar';
import BlogColumn from './pages/blogPages/BlogColumn';
import BlogSingle from './pages/blogPages/BlogSingle';
import BlogSingleSidebar from './pages/blogPages/BlogSingleSidebar';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/services-details/:id' element={<ServicesDetails />}></Route>
                <Route path='/services-details' element={<Navigate to='/services-details/1' />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/team-details/:id' element={<TeamDetails />}></Route>
                <Route path='/contact-us' element={<ContactUs />}></Route>

                <Route path='/pricing' element={<Pricing />}></Route>
                <Route path='/blogs' element={<BlogStandard />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSideBar />}></Route>
                <Route path='/blog-column' element={<BlogColumn />}></Route>
                <Route path='/blog-single/:id' element={<BlogSingle />}></Route>
                <Route path='/blog-single' element={<Navigate to='/blog-single/1' />}></Route>
                <Route path='/blog-single-sidebar/:id' element={<BlogSingleSidebar />}></Route>
                <Route path='/blog-single-sidebar/' element={<Navigate to='/blog-single-sidebar/1' />}></Route>

                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </>
    );
};

export default Routers;
