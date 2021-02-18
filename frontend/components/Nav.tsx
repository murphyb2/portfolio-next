import Link from "next/link";
import React, { ReactNode } from "react";

type NavProps = {
  className?: string;
  children?: ReactNode;
};

type NavItemProps = {
  className?: string;
  children?: ReactNode;
  to: string;
};
const Nav = ({ className = "", children }: NavProps) => {
  return <div className={`${className}`}>{children}</div>;
};

Nav.Item = ({ children, to, className = "" }: NavItemProps) => {
  return (
    <Link href={to}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default Nav;
