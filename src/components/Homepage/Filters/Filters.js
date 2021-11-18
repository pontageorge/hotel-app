import React from "react";

import styles from "./Filters.module.css";
import OccupantsFilter from "./OccupantsFilter/OccupantsFilter";

import RatingFilter from "./RatingFilter/RatingFilter";

export default function Filters({ stars, setStars, people, setPeople }) {
  return (
    <div className={styles.componentWrap}>
      <RatingFilter rating={stars} setRating={setStars} />
      <OccupantsFilter people={people} setPeople={setPeople} />
    </div>
  );
}
