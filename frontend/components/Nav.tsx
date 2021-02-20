import Link from "next/link";
import React, { ReactNode } from "react";

type NavProps = {
  className?: string;
  children?: ReactNode;
};

type NavItemProps = {
  className?: string;
  children?: ReactNode;
};
const Nav = ({ className = "", children }: NavProps) => {
  return <div className={`${className}`}>{children}</div>;
};

Nav.Item = ({ children, className = "" }: NavItemProps) => {
  return <div className={className}>{children}</div>;
};

export default Nav;
