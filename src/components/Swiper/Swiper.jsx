import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";

import { imgs } from "./img/data.js";

function Swipers() {
  return (
    <>
      <Swiper autoplay={true} loop={true}>
        {imgs.map((imageItemLink, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={imageItemLink} alt="image" />;
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Swipers;
