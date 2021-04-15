import React, { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  initialVisibility?: boolean;
};
const FadeInSection = ({ children, initialVisibility = true }: Props) => {
  const [isVisibile, setVisible] = useState(initialVisibility);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      {
        threshold: 0.4,
      }
    );
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [domRef.current]);

  return (
    <div
      className={`fade-in-section ${isVisibile ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
