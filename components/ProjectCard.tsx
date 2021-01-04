import React, { ReactNode } from "react";
import ProjectCardImg from "./ProjectCardImg";

type Props = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

const ProjectCard = ({ title, children, className = "" }: Props) => {
  return (
    <div className={`${className} flex flex-col m-3`}>
      <div className="mx-auto">{title}</div>
      {children}
    </div>
  );
};

ProjectCard.Img = ProjectCardImg;

export default ProjectCard;
