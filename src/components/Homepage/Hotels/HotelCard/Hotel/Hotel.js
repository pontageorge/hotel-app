import React from "react";

import styles from "./Hotel.module.css";

import Images from "./Images/Images";
import Rating from "./Rating/Rating";
import Location from "./Location/Location";
import Description from "./Description/Description";

export default function Hotel({ hotel }) {
  return (
    <div className={styles.hotelWrap}>
      <Images images={hotel.images} />
      <div className={styles.informationWrap}>
        <h3>{hotel.name}</h3>
        <Rating starRating={hotel.starRating} />
        <Location hotel={hotel} />
        <Description description={hotel.description} />
      </div>
    </div>
  );
}
