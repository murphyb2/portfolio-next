import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col m-10 p-10">
      <div className="mx-auto flex space-x-5">
        <a href="https://github.com/murphyb2" target="_blank">
          <Image src="/github-brands.svg" height={32} width={32} />
        </a>
        <a href="https://www.linkedin.com/in/murphyb2/" target="_blank">
          <Image src="/linkedin-in-brands.svg" height={32} width={32} />
        </a>
        <a href="https://www.instagram.com/thecrimsonnchin/" target="_blank">
          <Image src="/instagram-brands.svg" height={32} width={32} />
        </a>
      </div>
      <p className="text-center text-devRed">
        Bryan Murphy @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
