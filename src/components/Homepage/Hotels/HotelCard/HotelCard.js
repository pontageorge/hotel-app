import React from "react";

import Hotel from "./Hotel/Hotel";
import Rooms from "./Rooms/Rooms";

export default function HotelCard({ hotel, people }) {
  return (
    <div>
      <Hotel hotel={hotel} />
      <Rooms hotelID={hotel.id} people={people} />
    </div>
  );
}
