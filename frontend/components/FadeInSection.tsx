import React, { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
};
const FadeInSection = ({ children }: Props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          return setVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
      }
    );
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [domRef.current]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
