import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getStrapiMedia } from "../../utils/media";

import Button from "../Button";
import FadeInSection from "../FadeInSection";

type Props = {
  projects: any;
};

const ProjectsView = ({ projects }: Props) => {
  return (
    <>
      {projects?.map((project, index) => {
        return (
          <FadeInSection key={project.id}>
            <div
              className={`${
                index % 2 < 1 ? "" : ""
              } grid grid-cols-12 md:my-12 gap-6 py-5`}
            >
              <div
                className={`col-start-2 col-span-10 ${
                  index % 2 < 1
                    ? "md:order-first md:col-start-2 md:col-span-4" // image | description
                    : "md:order-last md:col-start-8 md:col-span-4" // description | image
                }`}
              >
                <Image
                  src={getStrapiMedia(project.thumbnail)}
                  layout="responsive"
                  height={project.thumbnail.height}
                  width={project.thumbnail.width}
                />
              </div>

              <div
                className={`col-start-2 col-span-10 ${
                  index % 2 < 1
                    ? "md:col-start-6 md:col-span-6" // image | description
                    : "md:col-start-2 md:col-span-6" // description | image
                } flex flex-col h-full`}
              >
                <h3
                  className={`${
                    index % 2 < 1 ? "" : "text-right"
                  } font-medium text-3xl`}
                >
                  {project.title}
                </h3>
                <p className={`${index % 2 < 1 ? "" : "text-right"} text-xl`}>
                  {project.shortDescription}
                </p>
                <div
                  className={`mt-5 ${index % 2 < 1 ? "" : "ml-auto"} my-auto`}
                >
                  <Link href={`/projects/${project.id}`}>
                    <a>
                      <Button>See More</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        );
      })}
    </>
  );
};

export default ProjectsView;
