import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink as Link } from 'react-router-hash-link';
import CountUp from 'react-countup';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            className="banner-style-two-area text-light bg-cover overflow-hidden"
            style={{ backgroundImage: "url(/img/banner/1.jpg)" }}
        >
            <div className="banner-shape-right-bottom">
                <img src="/img/shape/4.png" alt="Image Not Found" />
            </div>
            <div className="banner-style-two">
                <div className="container">
                    <div className="content">
                        <div className="row align-center">
                            <div className="col-xl-8">
                                <h2 data-aos="fade-left" data-aos-delay="500">
                                    Digital <strong>Experience</strong>
                                </h2>
                            </div>
                            <div className="col-xl-4">
                                <div className="banner-right-info">
                                    <div className="banner-list">
                                        <div className="fun-fact">
                                            <div className="content">
                                                <div className="counter">
                                                    <div className="timer">
                                                        <CountUp end={276} duration={3} enableScrollSpy />
                                                    </div>
                                                    <div className="operator">K</div>
                                                </div>
                                                <span className="medium">Completed Projects</span>
                                            </div>
                                        </div>
                                        <p data-aos="fade-up" data-aos-delay="500">
                                            Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now achieving point.
                                        </p>
                                        <div className="button mt-30" data-aos="fade-up" data-aos-delay="900">
                                            <Link className="btn-animation" to="/services#">
                                                <i className="fa-solid fa-arrow-right"></i> <span>Our Services</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
