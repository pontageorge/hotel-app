import React, { useReducer, useState } from "react";
import Filters from "./Filters/Filters";

import styles from "./Homepage.module.css";

import Hotels from "./Hotels/Hotels";

function Homepage() {
  const [stars, setStars] = useState(3);
  const [people, setPeople] = useReducer((state, newState) => ({ ...state, ...newState }), {
    adults: 1,
    children: 0,
  });

  const handleSetPeople = (type, number) => {
    const MINIMUM_NUMBER_PEOPLE = type === "adults" ? 1 : 0;
    const MAXIMUM_NUMBER_PEOPLE = 10;

    if (number >= MINIMUM_NUMBER_PEOPLE && number <= MAXIMUM_NUMBER_PEOPLE)
      setPeople({ [type]: number });
  };

  return (
    <div className={styles.componentWrap}>
      <Filters stars={stars} setStars={setStars} people={people} setPeople={handleSetPeople} />
      <Hotels rating={stars} people={people} />
    </div>
  );
}

export default Homepage;
