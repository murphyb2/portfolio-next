import React from "react";
import Image from "next/image";

import { About } from "../../interfaces/index";

type Props = {
  content: About;
};

const AboutView = ({ content }: Props) => {
  return (
    <div className="flex m-10">
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${content.profilePic.url}`}
          height={`${content.profilePic.height}`}
          width={`${content.profilePic.width}`}
          alt="B"
        />
      </div>
      <div className="flex flex-col">
        <h1>{content.header}</h1>
        <h4>{content.body}</h4>
      </div>
    </div>
  );
};

export default AboutView;
