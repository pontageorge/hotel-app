import React from "react";

import styles from "./RatingFilter.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RatingFilter({ rating, setRating }) {
  const returnStarsRating = () => {
    var stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          onClick={() => {
            setRating(i + 1);
          }}
          icon={[i < rating ? "fas" : "far", "star"]}
        />
      );
    }
    return stars;
  };

  return <div className={styles.ratingFilter}>{returnStarsRating()}</div>;
}
