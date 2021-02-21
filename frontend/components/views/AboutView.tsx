import React from "react";
import Image from "next/image";

import Button from "../Button";

import { getStrapiMedia } from "../../utils/media";

type Props = {
  about: any;
};
const AboutView = ({ about }: Props) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("clicked");
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-4 col-span-6">
        <Image
          src={getStrapiMedia(about.profilePic)}
          layout="responsive"
          height={about.profilePic.height}
          width={about.profilePic.width}
        />
      </div>
      <p className="col-start-4 col-span-6 text-xl my-16">{about.body}</p>
      {/* <div className="bg-black text-white mx-auto px-8 py-2 col-start-6 col-span-2 text-center">
        Resume
      </div> */}
      <Button className="col-start-6 col-span-2 mx-auto" onClick={handleClick}>
        Resume
      </Button>
    </div>
  );
};

export default AboutView;
