import { GetStaticProps } from "next";
import Image from "next/image";
import { useRef } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import ContactView from "../components/views/ContactView";
import AboutView from "../components/views/AboutView";
import ProjectsView from "../components/views/ProjectsView";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

export default function Home({ projects, about }) {
  const projectsRef: any = useRef();
  const handleProjectsScroll = () => {
    projectsRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutRef: any = useRef();
  const handleAboutScroll = () => {
    aboutRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactRef: any = useRef();
  const handleContactScroll = () => {
    contactRef?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-12 h-screen p-3">
        <div className="md:col-start-2 col-span-full sm:col-span-5 flex flex-col sm:row-span-10 justify-around">
          <h1 className="font-display text-4xl md:text-8xl">
            Hi, I'm <br />
            Bryan Murphy
          </h1>
          <h2 className="text-2xl md:text-6xl italic">
            Design Focused <br />
            Full Stack Engineer
          </h2>
        </div>
        <div className="col-span-full sm:col-start-7 sm:col-span-5 my-auto">
          <Image
            src="/svg/undraw_solution_mindset.svg"
            alt=""
            layout="responsive"
            height={902.402}
            width={815.631}
            className="self-center"
          />
        </div>
        <Nav className="col-span-full flex justify-center items-center my-auto">
          <Nav.Item className="px-5 md:px-12">
            <button className="text-xl" onClick={handleProjectsScroll}>
              projects
            </button>
          </Nav.Item>
          <Nav.Item className="px-5 md:px-12">
            <button className="text-xl" onClick={handleAboutScroll}>
              about
            </button>
          </Nav.Item>
          <Nav.Item className="px-5 md:px-12">
            <button className="text-xl" onClick={handleContactScroll}>
              contact
            </button>
          </Nav.Item>
        </Nav>
      </div>
      <div className="bg-gray-100" ref={projectsRef} id="projects">
        <div className="grid">
          <SectionTitle title="projects" />
          <ProjectsView projects={projects} />
        </div>
      </div>
      <div ref={aboutRef} className="grid mb-12" id="about">
        <SectionTitle title="about" />
        <AboutView about={about} />
      </div>
      <div className="bg-gray-100 grid" ref={contactRef} id="contact">
        <SectionTitle title="contact" />
        <div className="mb-12">
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
