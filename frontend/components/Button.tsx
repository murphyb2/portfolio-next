import React, { ReactNode } from "react";

type Props = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  text,
  className = "",
  type = "button",
  children,
  onClick,
}: Props) => {
  const handleMouseEnter = () => {
    console.log("im hovering!");
  };

  const handleMouseLeave = () => {
    console.log("im not hovering anymore...");
  };

  return (
    <button
      className={`${className} bg-black text-white px-5 py-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={type}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default Button;
