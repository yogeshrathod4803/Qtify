import { useEffect, useState } from "react";
import styles from "../carousel.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../Assets/leftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
