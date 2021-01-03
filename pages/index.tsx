import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Bryan Murphy">
    <div className="h-screen flex flex-col">
      <h1 className="pt-4 pl-4">Bryan Murphy</h1>
      <div className="text-center my-auto flex">
        <h1 className="text-right mx-auto">
          Design Focused. <br />
          Full Stack Engineer.
        </h1>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
