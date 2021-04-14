import { useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import Footer from "../../components/Footer";

import { getStrapiMedia } from "../../utils/media";
import { LinkRenderer } from "../../utils/markdown";
import NavBar from "../../components/NavBar";
import ReactMarkdown from "react-markdown";
import Button from "../../components/Button";
import Link from "next/link";
import MarkdownImg from "../../components/MarkdownImg";

const ProjectDetailPage = ({ project }) => {
  return (
    <>
      <NavBar className="py-10 bg-gray-100" />
      <div className="grid grid-cols-12">
        <div className="my-7 mx-5 col-span-full md:col-start-2 md:col-span-10 flex flex-col">
          <div className="flex justify-around">
            <hr
              className="my-auto flex-grow"
              style={{
                height: "2px",
                backgroundColor: "black",
              }}
            />
            <h1 className="mx-2 md:mx-7 font-display text-2xl md:text-4xl text-center">
              {project.title}
            </h1>
            <hr
              className="my-auto flex-grow"
              style={{
                height: "2px",
                backgroundColor: "black",
              }}
            />
          </div>
        </div>
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6">
          <Image
            src={getStrapiMedia(project.thumbnail)}
            height={project.thumbnail.height}
            width={project.thumbnail.width}
            layout="responsive"
          />
        </div>
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 mt-8">
          {project.link && (
            <Link href={project.link}>
              <a target="_blank">
                <Button>Visit Site</Button>
              </a>
            </Link>
          )}
          {project.githubLink && (
            <Link href={project.githubLink}>
              <a target="_blank">
                <Button>Visit Code</Button>
              </a>
            </Link>
          )}
        </div>
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 text-xl py-8">
          {project.description ? (
            <ReactMarkdown
              renderers={{
                link: LinkRenderer,
                image: ({ node }) => <MarkdownImg node={node} />,
              }}
            >
              {project.description}
            </ReactMarkdown>
          ) : (
            project.shortDescription
          )}
        </div>
      </div>
      <Footer className="bg-gray-100" />
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
