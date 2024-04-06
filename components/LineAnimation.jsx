"use client";

import { useEffect, useRef } from "react";

const LineAnimation = ({ styles }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lineRef.current.style.width = "100%";
          lineRef.current.style.transition = "width 1s";
        }
      });
    });

    observer.observe(lineRef.current);

    return () => {
      observer.unobserve(lineRef.current);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-[1px] bg-transparent overflow-hidden ${styles}`}
    >
      <div
        ref={lineRef}
        className={`absolute left-0 top-0 h-full bg-white `}
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};

export default LineAnimation;
