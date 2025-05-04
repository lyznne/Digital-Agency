import React from 'react';

const SingleBrand = ({ brand }) => {
    const { thumb } = brand

    return (
        <>
            <div className="swiper-slides">
                <img src={`/img/brand/${thumb}`} alt="Image Not Found" />
            </div>
        </>
    );
};

export default SingleBrand;
