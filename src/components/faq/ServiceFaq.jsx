import React from 'react';
import ServiceFaqData from '../../jsonData/ServiceFaqData.json'
import SingleFaq from '../experience/SingleFaq';

const ServiceFaq = () => {
    return (
        <>
            <div className="accordion mt--20" id="faqAccordion">
                {ServiceFaqData.map(faq =>
                    <SingleFaq faq={faq} key={faq.id} />
                )}
            </div>
        </>
    );
};

export default ServiceFaq;
