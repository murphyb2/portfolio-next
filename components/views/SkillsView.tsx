import React from "react";
import { Skill } from "../../interfaces/index";

import Pill from "../Pill";

type Props = {
  skills?: Skill[];
};

const SkillsView = ({ skills }: Props) => {
  return (
    <>
      {skills?.map((skill) => (
        <Pill key={skill.id}>{skill.name}</Pill>
      ))}
      <p>
        I've worked with a wide variety of languages and tools. Recently I've
        invested in the ever-growing full stack JavaScript ecosystem for most
        web applications. For data-heavy or performance focused projects C# is
        my go to backend language and periodically Python.
      </p>
    </>
  );
};

export default SkillsView;
