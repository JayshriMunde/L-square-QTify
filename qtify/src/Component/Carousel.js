import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../card";
import LeftButton from "./Buttons/LeftButton";
import RightButton from "./Buttons/RightButton";
import { Navigation } from "swiper/modules";

const Carousel = ({ items }) => {
  return (
    <>
      <LeftButton className="swiper-button-prev" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((album) => (
          <SwiperSlide>
            <Card data={album} />
          </SwiperSlide>
        ))}
      </Swiper>
      <RightButton className="swiper-button-next" />
    </>
  );
};

export default Carousel;
