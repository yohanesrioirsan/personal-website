import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children, className }) => {
  const revealRef = useRef();

  useEffect(() => {
    const revealElement = revealRef.current;

    const revealOnScroll = () => {
      const revealTop = revealElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (revealTop < windowHeight * 1) {
        revealElement.classList.add("visible"); // Add "visible" class when the element is within the threshold
      }
    };

    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <div ref={revealRef} className={className}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
