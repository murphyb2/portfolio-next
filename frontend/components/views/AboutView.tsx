import React from "react";
import Image from "next/image";

type Props = {
  about: any;
};
const AboutView = ({ about }: Props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-4 col-span-6">
        <Image
          src={`http://localhost:1337${about.profilePic.url}`}
          layout="responsive"
          height={about.profilePic.height}
          width={about.profilePic.width}
        />
      </div>
      <p className="col-start-4 col-span-6">{about.body}</p>
      <div className="bg-black text-white mx-auto px-8 py-2 col-start-6 col-span-2 text-center">
        Resume
      </div>
    </div>
  );
};

export default AboutView;
