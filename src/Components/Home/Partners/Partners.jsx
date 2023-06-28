import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Partners.css";
import { Autoplay } from "swiper";

import Electrolux from "../../../Assest/Partners/1-1_png.webp"
import Toshiba from "../../../Assest/Partners/2_png.webp"
import Philips from "../../../Assest/Partners/3_png.webp"
import Lg from "../../../Assest/Partners/4_png.webp"
import Delongi from "../../../Assest/Partners/Delongi_png.webp"
import Elari from "../../../Assest/Partners/Elari_png.webp"
import Foriella from "../../../Assest/Partners/Foriella_png.webp"
import Gigaest from "../../../Assest/Partners/Gigaest_png.webp"
import Hansa from "../../../Assest/Partners/Hansa_png.webp"
import hp from "../../../Assest/Partners/hp_png.webp"
import Kenwood from "../../../Assest/Partners/Kenwood_png.webp"
import Meizu from "../../../Assest/Partners/Meizu_png.webp"
import Panasonic from "../../../Assest/Partners/Panasonic_png.webp"
import Remington from "../../../Assest/Partners/Remington_png.webp"
import Sonorus from "../../../Assest/Partners/Sonorus_png.webp"
import Sony from "../../../Assest/Partners/Sony_png.webp"
import TOYOTA from "../../../Assest/Partners/TOYOTA_png.webp"
import Z from "../../../Assest/Partners/Z_png.webp"

function Partners() {
    const [partnersData, setPartnersData] = useState([Electrolux, Toshiba, Philips, Lg, Delongi, Elari, Foriella, Gigaest, Hansa, hp, Kenwood, Meizu, Panasonic, Remington, Sonorus, Sony, TOYOTA, Z])
    return (
        <div className="partnersBox">
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                modules={[Autoplay]}
                className="mySwiper"
                loop={true}
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
                {partnersData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img className="partnersImg" src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

export default Partners