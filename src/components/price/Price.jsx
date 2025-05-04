import React from 'react';
import PriceData from '../../jsonData/PriceData.json'
import SinglePrice from './SinglePrice';

const Price = () => {
    return (
        <>
            <div className="pricing-area pricing-gird default-padding bottom-less">
                <div className="container">
                    <div className="pricing-style-two-items">
                        <div className="row">
                            {PriceData.map(price =>
                                <div className="col-xl-4 col-md-6 mb-30" key={price.id}>
                                    <SinglePrice price={price} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;
