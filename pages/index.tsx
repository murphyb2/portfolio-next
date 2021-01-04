import Layout from "../components/Layout";
import Box from "../components/Box";

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
        (element) => (
          <section className={`${sectionStyles}`}>
            <Box className="m-24 bg-devLightBlue">
              <Box.Footer className="text-center">{element}</Box.Footer>
            </Box>
          </section>
        )
      )}
    </Layout>
  );
};

export default IndexPage;
