import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getStrapiMedia } from "../../utils/media";

import Button from "../Button";

type Props = {
  projects: any;
};

const ProjectsView = ({ projects }: Props) => {
  return (
    <div>
      {projects?.map((project, index) => {
        return (
          <div className="grid grid-cols-12 my-12 gap-6" key={project.id}>
            <div
              className={`${
                index % 2 > 0
                  ? "order-last col-start-6 col-span-6" // image | description
                  : "col-start-2 col-span-6" // description | image
              } flex flex-col h-full`}
            >
              <h3 className="text-center font-medium text-3xl">
                {project.title}
              </h3>
              <p className="text-xl">{project.shortDescription}</p>
              <div className="m-auto">
                <Link href={`/projects/${project.id}`}>
                  <a>
                    <Button>See More</Button>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`${
                index % 2 > 0
                  ? "order-first col-start-2 col-span-4" // image | description
                  : "col-start-8 col-span-4" // description | image
              }`}
            >
              <Image
                src={getStrapiMedia(project.thumbnail)}
                layout="responsive"
                height={project.thumbnail.height}
                width={project.thumbnail.width}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsView;
