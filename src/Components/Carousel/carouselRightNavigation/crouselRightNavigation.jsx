import React from "react";
import { useEffect, useState } from "react";
import styles from "../carouselRightNavigation/carouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../Assets/rightArrow.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
