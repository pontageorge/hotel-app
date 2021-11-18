/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

import { getHotelRoomTypes } from "requests/hotel.requests";

import RoomList from "./RoomList/RoomList";
import RoomsHeader from "./RoomsHeader/RoomsHeader";

export default function Rooms({ hotelID, people }) {
  const [roomList, setRoomList] = useState(undefined);
  const [relevantRoomList, setRelevantRoomList] = useState(undefined);

  const [roomsVisible, setRoomsVisible] = useState(false);

  const [roomListHeight, setRoomListHeight] = useState(400);

  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current.clientHeight !== 0) setRoomListHeight(ref.current.clientHeight);
    }, 1);
    return () => clearTimeout(timer);
  }, [people.adults, people.children]);

  const HOTEL_ROOM_CONTENT_PX = 400;
  const HOTEL_ROOMS_HEADER_HEIGHT_PX = 31;

  const RoomsWrapCSS = css`
    overflow: hidden;

    background-color: #f9f9f9;

    height: ${roomsVisible && relevantRoomList.length > 0
      ? roomListHeight > 400
        ? HOTEL_ROOM_CONTENT_PX + HOTEL_ROOMS_HEADER_HEIGHT_PX
        : roomListHeight + HOTEL_ROOMS_HEADER_HEIGHT_PX
      : 20}px;
    width: 700px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;

    padding: 10px;
    margin: 0 0 20px 0;

    transition: all 0.5s ease-in-out 0s;
    transition-property: height;
  `;

  useEffect(() => {
    const getRoomInformation = async () => {
      if (!roomList) {
        let hotelRooms = await getHotelRoomTypes(hotelID);
        console.log(hotelRooms);
        setRoomList(hotelRooms.rooms);
      }
    };
    getRoomInformation();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people]);

  useEffect(() => {
    if (roomList) {
      let relevantRooms = roomList.filter((room) => {
        const { maxAdults, maxChildren, maxOverall } = room.occupancy;
        if (people.adults <= maxAdults && people.children <= maxChildren) {
          if (maxOverall) {
            if (people.adults + people.children <= maxOverall) return true;
            else return false;
          } else return true;
        } else return false;
      });

      setRelevantRoomList(relevantRooms);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people, roomList]);

  return (
    <div css={RoomsWrapCSS}>
      <RoomsHeader
        roomsVisible={roomsVisible}
        setRoomsVisible={setRoomsVisible}
        relevantRoomList={relevantRoomList}
      />
      <RoomList relevantRooms={relevantRoomList} roomsVisible={roomsVisible} refObj={ref} />
    </div>
  );
}
