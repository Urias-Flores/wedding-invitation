import "../styles/downarrow.css"
import {useEffect, useRef, useState} from "react";

export default function DownArrow() {
  const elementRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`down-arrow${isActive ? "--active" : ""}`}>
      <img src="/down-arrow.svg" alt="arrow" className="down-arrow-image"/>
    </div>
  )
}
