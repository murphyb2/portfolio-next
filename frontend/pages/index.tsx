import { GetStaticProps } from "next";
import axios from "axios";

import { Project, About, Skill } from "../interfaces/index";

import Layout from "../components/Layout";
import Box from "../components/Box";

import ProjectsView from "../components/views/ProjectsView";
import AboutView from "../components/views/AboutView";
import ContactView from "../components/views/ContactView";
import SkillsView from "../components/views/SkillsView";

type Props = {
  projects?: Project[];
  about?: About;
  skills?: Skill[];
};

const IndexPage = ({ projects, about, skills }: Props) => {
  const sectionStyles: string = `h-screen flex flex-col`;
  const boxStyles: string = "m-24 p-10 bg-devLightBlue";

  return (
    <Layout title="Bryan Murphy">
      <section className={`${sectionStyles}`}>
        <h1 className="pt-4 pl-4">Bryan Murphy</h1>
        <div className="text-center my-auto flex">
          <h1 className="text-right mx-auto">
            Design Focused. <br />
            Full Stack Engineer.
          </h1>
        </div>
      </section>
      {["projects", "about", "skills", "experience", "contact"].map(
        (element) => {
          switch (element) {
            case "projects":
              return projects ? (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className={boxStyles}>
                    <ProjectsView projects={projects} />
                    <Box.Footer className="text-center">projects</Box.Footer>
                  </Box>
                </section>
              ) : null;
            case "about":
              return about ? (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className={boxStyles}>
                    <AboutView content={about} />
                    <Box.Footer className="text-center">{element}</Box.Footer>
                  </Box>
                </section>
              ) : null;
            case "contact":
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className={boxStyles}>
                    <ContactView />
                    <Box.Footer className="text-center">{element}</Box.Footer>
                  </Box>
                </section>
              );

            case "skills":
              return skills ? (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className={boxStyles}>
                    <SkillsView skills={skills} />
                    <Box.Footer className="text-center">{element}</Box.Footer>
                  </Box>
                </section>
              ) : null;

            default:
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className={boxStyles}>
                    <Box.Footer className="text-center">{element}</Box.Footer>
                  </Box>
                </section>
              );
          }
        }
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resProjects = await axios.get("http://localhost:1337/projects");
  const resAbout = await axios.get("http://localhost:1337/about");
  const resSkills = await axios.get("http://localhost:1337/skills");
  return {
    props: {
      projects: resProjects.data,
      about: resAbout.data,
      skills: resSkills.data,
    },
  };
};

export default IndexPage;
