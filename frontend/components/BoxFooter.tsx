import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const BoxFooter = ({ className = "", children }: Props) => {
  return <div className={`${className} mt-auto p-3`}>{children}</div>;
};

export default BoxFooter;
