import React, { ReactNode } from "react";

type Props = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({
  text,
  className = "",
  type = "button",
  children,
  onClick = null,
  disabled = false,
}: Props) => {
  return (
    <button
      className={`${className} bg-black text-white px-5 py-2 transition duration-200 transform hover:-translate-y-1 hover:scale-110`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default Button;
