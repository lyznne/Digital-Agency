import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';
import ShowCaseData from '../../jsonData/ShowCaseData.json'
import SingleShowCase from './SingleShowCase';
import { useRef } from 'react';

const ShowCase = () => {

    const SlideRef = useRef()

    return (
        <>
            <div className="case-studies-area default-padding" style={{ backgroundImage: `url(/img/shape/30.png)` }}>
                <div className="container">
                    <div className="case-carousel swiper">
                        <div className="heading-left">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="content-left">
                                        <h5 className="sub-title">Popular Projects</h5>
                                        <h2 className="heading">Completed Projects</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-wrappers">
                            <Swiper
                                ref={SlideRef}
                                modules={[Keyboard, Autoplay, Pagination]}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                keyboard={{
                                    enabled: true,
                                }}
                            >
                                {ShowCaseData.map(showcase =>
                                    <SwiperSlide key={showcase.id}>
                                        <SingleShowCase showcase={showcase} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className="case-swiper-nav">
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowCase;
