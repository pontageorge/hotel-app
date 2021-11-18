import React from "react";

import styles from "./Location.module.css";

export default function Location({ hotel }) {
  return (
    <div className={styles.locationWrap}>
      <p>{hotel.address1 + ", " + hotel.town}</p>
      {hotel.position && (
        <a
          href={
            "http://maps.google.com/maps?q=" +
            hotel.position.latitude +
            "," +
            hotel.position.longitude
          }
          target="_blank"
          rel="noreferrer"
        >
          Show on maps
        </a>
      )}
    </div>
  );
}
