import React from "react";
import HearoIcon from "../../Assets/headphone.png";
import styles from "../Hero-Section/hero-section.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img src={HearoIcon} alt="heroIcon" width={212} />
      </div>
    </div>
  );
};

export default HeroSection;
