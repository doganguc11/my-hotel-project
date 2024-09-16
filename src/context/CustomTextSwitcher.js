import React, { useState, useEffect } from 'react';

function CustomTextSwitcher({ texts, intervalTime = 3000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [texts, intervalTime]);

  return (
    <>{texts[currentTextIndex]}</>
  );
}

export default CustomTextSwitcher;
