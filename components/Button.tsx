import React from "react";

type Props = {
  text: string;
  className?: string;
};

const Button = ({ text, className = "" }: Props) => {
  const handleMouseEnter = () => {
    console.log("im hovering!");
  };

  const handleMouseLeave = () => {
    console.log("im not hovering anymore...");
  };

  return (
    <div
      className={`${className} rounded-full bg-devBlue px-5 py-2 m-3`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </div>
  );
};

export default Button;
