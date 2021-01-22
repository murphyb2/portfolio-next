import React from "react";
import Image from "next/image";

import { About } from "../../interfaces/index";

type Props = {
  content: About;
};

const AboutView = ({ content }: Props) => {
  return (
    <div className="flex">
      <div className="max-w-sm">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${content.profilePic.url}`}
          height={`${content.profilePic.height / 2}`}
          width={`${content.profilePic.width / 2}`}
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
