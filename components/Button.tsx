import React from "react";

type Props = {
  text: string;
  className?: string;
};
const Button = ({ text, className = "" }: Props) => {
  return (
    <div className={`${className} rounded-full bg-devBlue px-5 py-2 m-3`}>
      {text}
    </div>
  );
};

export default Button;
