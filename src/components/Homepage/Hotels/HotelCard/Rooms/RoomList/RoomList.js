/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Room from "./Room/Room";

export default function RoomList({ relevantRooms, roomsVisible, refObj }) {
  const RoomsCSS = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: 400px;
    overflow-y: auto;

    opacity: ${roomsVisible ? "1" : "0"};
    transition: all 0.5s ease-in-out 0s;

    padding: 5px;

    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;

  const returnRelevantRooms = () => {
    return relevantRooms && relevantRooms.map((room) => <Room key={room.name} room={room} />);
  };
  return (
    <div css={RoomsCSS}>
      <div ref={refObj}>{returnRelevantRooms()}</div>
    </div>
  );
}
