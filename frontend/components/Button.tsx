import React from "react";

type Props = {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ text, className = "", type = "button" }: Props) => {
  const handleMouseEnter = () => {
    console.log("im hovering!");
  };

  const handleMouseLeave = () => {
    console.log("im not hovering anymore...");
  };

  return (
    <button
      className={`${className} rounded-full bg-devDarkBlue text-devWhite px-5 py-2 m-3`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
