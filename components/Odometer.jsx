"use client";

import { useState, useEffect, useRef } from "react";

const Odometer = ({ initialValue, finalValue, speed }) => {
  const [value, setValue] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let currentValue = initialValue;
          const interval = setInterval(() => {
            currentValue += 1;
            if (currentValue > finalValue) {
              clearInterval(interval);
            } else {
              setValue(currentValue);
            }
          }, speed); // Adjust the speed of the animation here

          observer.unobserve(ref.current);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [initialValue, finalValue, speed]);

  return (
    <span className="transition-all duration-1000 ease-in-out" ref={ref}>
      {value}
    </span>
  );
};

export default Odometer;
