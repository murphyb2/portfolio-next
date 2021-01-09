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
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className="m-24 bg-devLightBlue">
                    <ProjectsView projects={projects} />
                    <Box.Footer className="text-center">projects</Box.Footer>
                  </Box>
                </section>
              );
            case "about":
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className="m-24 bg-devLightBlue">
                    <AboutView content={about} />
                    <Box.Footer className="text-center">about</Box.Footer>
                  </Box>
                </section>
              );
            case "contact":
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className="m-24 bg-devLightBlue">
                    <ContactView />
                    <Box.Footer className="text-center">contact</Box.Footer>
                  </Box>
                </section>
              );

            case "skills":
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className="m-24 bg-devLightBlue">
                    <SkillsView skills={skills} />
                    <Box.Footer className="text-center">skills</Box.Footer>
                  </Box>
                </section>
              );

            default:
              return (
                <section className={`${sectionStyles}`} key={element}>
                  <Box className="m-24 bg-devLightBlue">
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
