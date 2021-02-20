import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import Footer from "../../components/Footer";

import { getStrapiMedia } from "../../utils/media";
import NavBar from "../../components/NavBar";

const ProjectDetailPage = ({ project }) => {
  return (
    <>
      <NavBar className="my-5" />
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="my-7 col-start-2 col-span-10 flex flex-col">
          <div className="flex justify-around">
            <hr
              className="my-auto flex-grow"
              style={{
                height: "2px",
                backgroundColor: "black",
              }}
            />
            <h1 className="mx-7 font-display text-4xl">{project.title}</h1>
            <hr
              className="my-auto flex-grow"
              style={{
                height: "2px",
                backgroundColor: "black",
              }}
            />
          </div>
        </div>
        <div className="col-start-4 col-span-6">
          <Image
            src={getStrapiMedia(project.thumbnail)}
            height={project.thumbnail.height}
            width={project.thumbnail.width}
            layout="responsive"
          />
        </div>
        <p className="col-start-4 col-span-6">{project.shortDescription}</p>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?id=${params.id}`
  );

  return {
    props: {
      project: project.data[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesContent = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`
  );
  const ids = articlesContent.data.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};
