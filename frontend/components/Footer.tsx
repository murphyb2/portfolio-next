import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
};
const Footer = ({ className = "" }: Props) => {
  return (
    <footer className={`${className} flex flex-col p-10`}>
      <div className="mx-auto flex space-x-5">
        <a href="https://github.com/murphyb2" target="_blank">
          <Image src="/icons/social/github-brands.svg" height={32} width={32} />
        </a>
        <a href="https://www.linkedin.com/in/murphyb2/" target="_blank">
          <Image
            src="/icons/social/linkedin-in-brands.svg"
            height={32}
            width={32}
          />
        </a>
        <a href="https://www.instagram.com/thecrimsonnchin/" target="_blank">
          <Image
            src="/icons/social/instagram-brands.svg"
            height={32}
            width={32}
            className="fill-current text-black"
          />
        </a>
      </div>
      <p className="text-center text-devRed">
        Bryan Murphy @ {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
