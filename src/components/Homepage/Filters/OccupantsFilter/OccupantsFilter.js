import React from "react";

import styles from "./OccupantsFilter.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OccupantsFilter({ people, setPeople }) {
  return (
    <div className={styles.componentWrap}>
      <OcuppantsControler type={"adults"} number={people.adults} setNumber={setPeople} />
      <OcuppantsControler type={"children"} number={people.children} setNumber={setPeople} />
    </div>
  );
}

function OcuppantsControler({ type, number, setNumber }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={styles.peopleFilterWrap}>
      <p>{capitalizeFirstLetter(type)}</p>
      <FontAwesomeIcon
        size="1x"
        icon={["fas", "minus"]}
        onClick={() => setNumber(type, number - 1)}
      />
      <p>{number}</p>
      <FontAwesomeIcon
        size="1x"
        icon={["fas", "plus"]}
        onClick={() => setNumber(type, number + 1)}
      />
    </div>
  );
}
