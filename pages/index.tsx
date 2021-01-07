import { GetStaticProps } from "next";
import axios from "axios";

import { Project } from "../interfaces/index";

import Layout from "../components/Layout";
import Box from "../components/Box";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

type Props = {
  projects: Project[];
};

const IndexPage = ({ projects }: Props) => {
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
          return element === "projects" ? (
            <section className={`${sectionStyles}`} key={element}>
              <Box className="m-24 bg-devLightBlue">
                <div className="flex flex-row justify-center flex-wrap mx-44 mt-5 space-x-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} title={project.title}>
                      <ProjectCard.Img
                        img={project.icon}
                        height={100}
                        width={100}
                      />
                      <Button text="Learn More" className="mx-auto" />
                    </ProjectCard>
                  ))}
                </div>
                <Box.Footer className="text-center">projects</Box.Footer>
              </Box>
            </section>
          ) : (
            <section className={`${sectionStyles}`} key={element}>
              <Box className="m-24 bg-devLightBlue">
                <Box.Footer className="text-center">{element}</Box.Footer>
              </Box>
            </section>
          );
        }
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:1337/projects");
  return {
    props: {
      projects: res.data,
    },
  };
};

export default IndexPage;
