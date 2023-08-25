import React, { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./carousel.module.css";
import CarouselLeftNavigation from "./carouselLeftNavigation/carouselLeftNavigation";
import CarouselRightNavigation from "./carouselRightNavigation/crouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <></>;
};

const carousel = ({ data, component }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default carousel;
