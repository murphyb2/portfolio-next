import React from "react";
import Link from "next/link";

const Header = () => {
  // <header className="flex justify-between p-6 sticky">
  return (
    <div className="fixed right-0 p-4">
      {/* <Link href="/">
        <a>Bryan Murphy</a>
      </Link> */}
      <Link href="/about">
        <a className="mx-3">projects</a>
      </Link>
      <Link href="/users">
        <a className="mx-3">about</a>
      </Link>
      <Link href="/users">
        <a className="mx-3">skills</a>
      </Link>
      <Link href="/users">
        <a className="mx-3">experience</a>
      </Link>
      <Link href="/users">
        <a className="mx-3">contact</a>
      </Link>
    </div>
  );
  {
    /* </header> */
  }
};

export default Header;
