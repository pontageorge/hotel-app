/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./RoomsHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Spinner from "components/common/Spinner/Spinner";

export default function RoomsHeader({ roomsVisible, setRoomsVisible, relevantRoomList }) {
  const ChevronCSS = css`
    transform: rotate(${roomsVisible && relevantRoomList.length > 0 ? "180deg" : "0deg"});
    cursor: pointer;
    transition: all 0.5s ease-in-out 0s;
  `;

  const returnRoomsComponentHeader = () => {
    let roomWord = relevantRoomList.length !== 1 ? " rooms" : " room";
    let matchWord = relevantRoomList.length !== 1 ? " match" : " matches";

    return relevantRoomList ? (
      relevantRoomList.length + roomWord + matchWord + " your search"
    ) : (
      <Spinner minified />
    );
  };

  return (
    <div className={styles.roomHeaderWrap}>
      <h3>{returnRoomsComponentHeader()}</h3>
      <FontAwesomeIcon
        css={ChevronCSS}
        icon={["fas", "chevron-down"]}
        onClick={() => setRoomsVisible(!roomsVisible)}
      />
    </div>
  );
}
