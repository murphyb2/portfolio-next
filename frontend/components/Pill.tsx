import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Pill = ({ children }: Props) => {
  return (
    <div className="rounded-full bg-devBlue text-devWhite mx-auto px-2">
      {children}
    </div>
  );
};

export default Pill;
