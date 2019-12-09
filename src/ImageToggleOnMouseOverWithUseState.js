import React, { useState } from 'react';

const ImageToggleOnMouseOverWithUseState = ({ primaryImage, secondaryImage }) => {

  const [imgSrc, setImgSrc] = useState(primaryImage);
  return (
    <img
      onMouseOver={() => {
        setImgSrc(secondaryImage);
      }}
      onMouseOut={() => {
        setImgSrc(primaryImage);
      }}
      src={imgSrc}
      alt=""
    />
  );
}

export default ImageToggleOnMouseOverWithUseState;