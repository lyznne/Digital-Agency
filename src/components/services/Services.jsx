import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ServiceData from '../../jsonData/ServiceData.json'
import SingleService from './SingleService';

const Services = () => {
    return (
        <>
            <div className="services-style-two-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mb-30">
                            <div className="service-style-two-heading bg-theme bg-cover text-light" style={{ backgroundImage: "url(/img/shape/banner-3.webp)" }}>
                                <h5 className="sub-title">Our Services</h5>
                                <h2 className="title">Our creative & digital agency services</h2>
                                <div className="button-border-length mt-35">
                                    <Link to="/services#" className="btn-arrow-length">See All</Link>
                                </div>
                            </div>
                        </div>
                        {ServiceData.map(service =>
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleService service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
