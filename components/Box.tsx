import React, { ReactNode } from "react";

import BoxFooter from "./BoxFooter";

type Props = {
  className?: String;
  children?: ReactNode;
};

const Box = ({ className, children }: Props) => {
  return <div className={`${className} h-full flex flex-col`}>{children}</div>;
};

Box.Footer = BoxFooter;

export default Box;
