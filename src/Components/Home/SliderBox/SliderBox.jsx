import React, { useMemo, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { connect } from 'react-redux';
import "./SliderBox.css"
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import SliderItem from '../SliderItem/SliderItem';
function SliderBox(props) {
    const [spaceBetween, setSpaceBetween] = useState(10);
    useEffect(() => {
        setSpaceBetween(5);
    }, [props.data]);
    return (
        <>
            {<div className="Slider">
                <Swiper
                    className="mySwiper"
                    navigation={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={spaceBetween}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    loop={false}
                    effect={"coverflow"}
                    breakpoints={{
                        1024: {
                            spaceBetween: 0,
                            slidesPerView: 5,
                        },
                        768: {
                            spaceBetween: 0,
                            slidesPerView: 3
                        },
                        300: {
                            spaceBetween: 0,
                            slidesPerView: 1
                        },
                    }}
                >
                    {props.data.map((item, index) => (
                        < SwiperSlide key={index} >
                            <div className="sliderswipebox">
                                <SliderItem item={item} />
                            </div>
                        </SwiperSlide >
                    ))
                    }
                </Swiper >
            </div >}
        </>
    )
}

const mapStateToProps = (state) => {
    return { state };
};
export default connect(mapStateToProps)(SliderBox);
