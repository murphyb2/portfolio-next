import Link from "next/link";
import React from "react";
import Nav from "./Nav";

type Props = {
  className?: string;
};

const NavBar = ({ className = "" }: Props) => {
  return (
    <Nav className={`${className} grid justify-items-center grid-cols-9`}>
      <Nav.Item className="col-start-4">
        <Link href={"/"}>projects</Link>
      </Nav.Item>
      <Nav.Item className="">
        <Link href={"/"}>about</Link>
      </Nav.Item>
      <Nav.Item className="">
        <Link href={"/"}>contact</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
