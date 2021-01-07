import React from "react";

import { Project } from "../../interfaces/index";

import ProjectCard from "../ProjectCard";
import Button from "../Button";

type Props = {
  projects?: Project[];
};

const ProjectsView = ({ projects }: Props) => {
  return (
    <div className="flex flex-row justify-center flex-wrap mx-56 my-auto space-x-32">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} title={project.title}>
            <ProjectCard.Img img={project.icon} height={100} width={100} />
            <Button text="Learn More" className="mx-auto" />
          </ProjectCard>
        ))}
    </div>
  );
};

export default ProjectsView;
