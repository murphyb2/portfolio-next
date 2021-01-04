import React, { ReactNode } from "react";

import BoxFooter from "./BoxFooter";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Box = ({ className, children }: Props) => {
  return (
    <div
      className={`${className ? className : ""} h-full flex flex-col shadow-xl`}
    >
      {children}
    </div>
  );
};

Box.Footer = BoxFooter;

export default Box;
