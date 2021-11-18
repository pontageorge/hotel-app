/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import styles from "./Images.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";

export default function Images({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const ImagesCarouselCSS = css`
    display: flex;
    justify-content: flex-start;

    width: 200px;

    transform: translateX(-${imageIndex * 200}px);
    transition: transform ease-in-out 0.3s;

    img {
      width: 200px;
      height: 200px;

      user-select: none;

      border-radius: 5px;
    }
  `;

  const renderImagesCarousel = () => {
    return (
      <div css={ImagesCarouselCSS}>
        {images.map((image) => (
          <img key={image.url} src={image.url} alt={image.alt} />
        ))}
      </div>
    );
  };

  const handleImageSlide = (side) => {
    if (side === "right" && imageIndex < images.length - 1) setImageIndex(imageIndex + 1);
    else if (side === "left" && imageIndex > 0) setImageIndex(imageIndex - 1);
  };

  return (
    <div className={styles.componentWrap}>
      {renderImagesCarousel()}
      {images.length > 1 && (
        <Fragment>
          <Arrow side={"left"} handle={() => handleImageSlide("left")} />
          <Arrow side={"right"} handle={() => handleImageSlide("right")} />
        </Fragment>
      )}
    </div>
  );
}

function Arrow({ side, handle }) {
  const ArrowCSS = css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 3;

    height: 10px;
    width: 10px;

    padding: 5px;

    ${side === "right" ? `right: 5px` : `left: 5px`};
    top: 50%;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: white;
    border-radius: 5px;

    font-size: 8px;

    cursor: pointer;

    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <div css={ArrowCSS} onClick={() => handle()}>
      {side === "right" ? (
        <FontAwesomeIcon size="2x" icon={["fas", "chevron-right"]} aria-hidden="true" />
      ) : (
        <FontAwesomeIcon size="2x" icon={["fas", "chevron-left"]} aria-hidden="true" />
      )}
    </div>
  );
}
