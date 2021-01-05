import React from "react";
import Image from "next/image";

type Props = {
  img: any;
  clasName?: string;
  height?: number;
  width?: number;
};

const imageDefault = {
  url: "/solid-b.svg",
  height: 100,
  width: 100,
};

const ProjectCardImg = ({ img, height, width }: Props) => {
  console.log(img.url);
  return img.url ? (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`}
      height={height || img.height}
      width={width || img.width}
      alt="icon"
    />
  ) : (
    <Image
      src={`${imageDefault.url}`}
      height={`${height || imageDefault.height}`}
      width={`${width || imageDefault.width}`}
      alt="B"
    />
  );
};

export default ProjectCardImg;
