import React, { useEffect, useState } from 'react';
import BrandData from '../../jsonData/BrandData.json'
import SingleBrand from './SingleBrand';
import { Keyboard, Autoplay } from 'swiper/modules';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
const Brand = () => {

    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        const delay = 5000;
        const timer = setTimeout(() => {
            setAutoplay(true);
        }, delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="brand-area relative overflow-hidden bg-fixed" style={{ backgroundImage: "url(/img/banner/5.jpg)" }}>
                <div className="video-bg-live">
                    <ReactPlayer
                        width='100%'
                        height='100%'
                        muted={true}
                        playing={autoplay}
                        controls={true}
                        url='https://www.youtube.com/watch?v=jLApKmOgOas' />
                </div>
                <div className="shadow dark-hard"></div>
                <div className="brand-style-one-info text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Trusted by <br /> <strong>180K</strong> global brands</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-style-one bg-gradient text-light">
                    <div className="container-fill">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand-carousel">
                                    <div className="swiper-wrappers">
                                        <Swiper
                                            modules={[Keyboard, Mousewheel, Autoplay]}
                                            slidesPerView={1}
                                            spaceBetween={25}
                                            autoplay={{
                                                delay: 0,
                                                stopOnLastSlide: false,
                                                disableOnInteraction: false,
                                            }}
                                            speed={4000}
                                            loop={true}
                                            grabCursor={true}

                                            mousewheel={true}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            breakpoints={{
                                                450: {
                                                    slidesPerView: 2,
                                                },
                                                768: {
                                                    slidesPerView: 3,
                                                },
                                                992: {
                                                    slidesPerView: 4,
                                                }
                                            }}
                                        >
                                            {BrandData.map(brand =>
                                                <SwiperSlide key={brand.id}>
                                                    <SingleBrand brand={brand} />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brand;
