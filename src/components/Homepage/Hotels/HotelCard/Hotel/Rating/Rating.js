import React from "react";

import styles from "./Rating.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ starRating }) {
  const returnStarsRating = () => {
    var stars = [];
    for (var i = 0; i < starRating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={["fas", "star"]} />);
    }
    return stars;
  };

  return <div className={styles.ratingWrap}>{returnStarsRating()}</div>;
}
