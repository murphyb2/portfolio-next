import Link from "next/link";
import React from "react";
import Nav from "./Nav";

type Props = {
  className?: string;
};

const NavBar = ({ className = "" }: Props) => {
  return (
    <Nav className={`${className} flex justify-center items-center`}>
      <Nav.Item className="px-5 md:px-12">
        <Link href={"/"}>home</Link>
      </Nav.Item>
      <Nav.Item className="px-5 md:px-12">
        <Link href={"/#projects"}>projects</Link>
      </Nav.Item>
      <Nav.Item className="px-5 md:px-12">
        <Link href={"/#about"}>about</Link>
      </Nav.Item>
      <Nav.Item className="px-5 md:px-12">
        <Link href={"/#contact"}>contact</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
