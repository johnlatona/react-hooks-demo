import React, { useEffect, useState, useRef } from 'react';

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {

  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  useEffect(() => { // runs when component mounts
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return (() => { // returns when component unmounts
      window.removeEventListener("scroll", scrollHandler);
    });
  }, [isLoading]);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  return isLoading ? null : (
    <img
      src={inView ? secondaryImage : primaryImage}
      alt=""
      ref={imageRef}
      width="500"
      height="500"
    />
  );
};

export default ImageToggleOnScroll;