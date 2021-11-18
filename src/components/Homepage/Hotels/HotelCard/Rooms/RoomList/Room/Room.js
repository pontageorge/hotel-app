import React from "react";

import styles from "./Room.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Room({ room }) {
  return (
    <div className={styles.roomWrap}>
      <RoomHeader room={room} />
      <div className={styles.roomFacilities}>
        {room.facilities.map((facility) => (
          <Facility key={facility.name} facility={facility} />
        ))}
      </div>
      <div className={styles.roomContent}>
        <p>{room.longDescription}</p>
      </div>
    </div>
  );
}

function RoomHeader({ room }) {
  return (
    <h4>
      {room.name}{" "}
      <span>
        {room.occupancy.maxAdults} <FontAwesomeIcon icon={["fas", "male"]} />
      </span>{" "}
      <span>
        {room.occupancy.maxChildren} <FontAwesomeIcon icon={["fas", "child"]} />
      </span>
    </h4>
  );
}

function Facility({ facility }) {
  return (
    <div className={styles.facility}>
      <FontAwesomeIcon icon={["fas", "check"]} />
      <p>{facility.name}</p>
    </div>
  );
}
