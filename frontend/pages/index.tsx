import { GetStaticProps } from "next";
import Image from "next/image";
import axios from "axios";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import ContactView from "../components/views/ContactView";
import AboutView from "../components/views/AboutView";
import ProjectsView from "../components/views/ProjectsView";
import SectionTitle from "../components/SectionTitle";

export default function Home({ projects, about }) {
  return (
    <>
      <div className="grid grid-cols-12 pt-10 px-10 h-screen">
        <div className="col-span-6 grid grid-rows-6">
          <h1>Bryan Murphy</h1>
          <h2>Design Focused Full Stack Engineer</h2>
          <Nav className="row-start-6 flex justify-around items-center" />
        </div>
        <div className="col-start-7 col-span-6 items-end">
          <Image
            src="/svg/undraw_solution_mindset.svg"
            alt=""
            layout="responsive"
            height={902.402}
            width={815.631}
            className="col-start-6"
          />
        </div>
        <div className="col-span-full m-auto">
          <Image
            src="/svg/chevron-down.svg"
            alt=""
            layout="intrinsic"
            width={30.705}
            height={18.634}
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="grid">
          <SectionTitle title="projects" />
          <ProjectsView projects={projects} />
        </div>
      </div>
      <div>
        <SectionTitle title="about" />
        <AboutView about={about} />
      </div>
      <div className="bg-gray-100">
        <SectionTitle title="contact" />
        <div>
          <ContactView />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/projects`
  );
  const about = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about`);

  return {
    props: {
      projects: projects.data,
      about: about.data,
    },
  };
};
