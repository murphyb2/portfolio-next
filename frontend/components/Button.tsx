import React, { ReactNode } from "react";

type Props = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  hoverAnimate?: boolean;
  overrideDefaultStyles?: string;
};

const Button = ({
  text,
  className = "",
  type = "button",
  children,
  overrideDefaultStyles = null,
  onClick = null,
  disabled = false,
  hoverAnimate = true,
}: Props) => {
  return (
    <button
      className={
        overrideDefaultStyles
          ? overrideDefaultStyles
          : `${className} bg-black text-white px-5 py-2 ${
              hoverAnimate
                ? "transition duration-200 transform hover:-translate-y-1 hover:scale-110"
                : ""
            } `
      }
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default Button;
