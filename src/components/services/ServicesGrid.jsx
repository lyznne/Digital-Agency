import React from 'react';
import SingleService from './SingleService';
import ServiceData from '../../jsonData/ServiceData.json'

const ServicesGrid = ({ serviceClass }) => {
    return (
        <>
            <div className={`services-style-two-area service-two-grid default-padding-top bottom-less ${serviceClass}`}>
                <div className="container">
                    <div className="row">
                        {ServiceData.map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleService service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesGrid;
