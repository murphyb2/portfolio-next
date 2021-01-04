import Layout from "../components/Layout";
import Box from "../components/Box";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

const IndexPage = () => {
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
                <ProjectCard title="Project 1">
                  <ProjectCard.Img />
                  <Button text="Learn More" className="mx-auto" />
                </ProjectCard>
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

export default IndexPage;
