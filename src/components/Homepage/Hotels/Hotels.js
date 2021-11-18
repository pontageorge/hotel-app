import React, { useEffect, useContext } from "react";
import { AppContext } from "context/appContext";

import styles from "./Hotels.module.css";

import HotelCard from "./HotelCard/HotelCard";

export default function Hotels({ rating, people }) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    const handleGetHotels = async () => {
      if (!appContext.hotels) appContext.getHotels();
    };
    handleGetHotels();
  }, [appContext.hotels]);

  return (
    <div className={styles.componentWrap}>
      {appContext.hotels ? (
        appContext.hotels.map(
          (hotel) =>
            hotel.starRating >= rating && (
              <HotelCard key={hotel.name} hotel={hotel} people={people} />
            )
        )
      ) : (
        <div>There are no hotels available at the moment!</div>
      )}
    </div>
  );
}
