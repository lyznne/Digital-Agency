import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <img src="/img/logo/logo-new.png" alt="Logo" />
                <button type="button" className="navbar-toggle" onClick={closeMenu}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="nav navbar-nav navbar-center">
                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle active" onClick={toggleSubMenu}>Home</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/#">Digital Agency</Link></li>
                            <li><Link target='_blank' to="#">Creative Agency</Link></li>
                            <li><Link target='_blank' to="#">Digital Marketing</Link></li>
                            <li><Link target='_blank' to="#">Consulting Business</Link></li>

                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Services</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/services-details#">Marketing Strategy</Link></li>
                            <li><Link to="/services-details#">Enterprise Consulting</Link></li>
                            <li><Link to="/services-details#">Growth Tracking</Link></li>
                            <li><Link to="/services-details#">Social Media Marketing</Link></li>
                            <li><Link to="/services-details#">Keyword Research</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/team#">Team</Link></li>
                    <li><Link to="/blogs#">Blogs</Link></li>
                    <li><Link to="/Projects#">Projects</Link></li>
                    <li><Link to="/services#">Services</Link></li>
                    <li><Link to="/contact-us#">contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;
