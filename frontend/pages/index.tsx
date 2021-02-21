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
      <div className="grid grid-cols-12 h-screen">
        <Nav className="col-span-full flex justify-center items-center bg-gray-100 mb-8">
          <Nav.Item className="px-12">
            <button onClick={handleProjectsScroll}>projects</button>
          </Nav.Item>
          <Nav.Item className="px-12">
            <button onClick={handleAboutScroll}>about</button>
          </Nav.Item>
          <Nav.Item className="px-12">
            <button onClick={handleContactScroll}>contact</button>
          </Nav.Item>
        </Nav>
        <div className="col-start-2 col-span-5 flex flex-col">
          <h1 className="font-display text-8xl mb-16">
            Hi, my name is <br />
            Bryan Murphy
          </h1>
          <h2 className="text-6xl italic">
            Design Focused <br />
            Full Stack Engineer
          </h2>
          {/* <div className="mt-auto pb-12 text-center cursor-pointer">
            <Image
              src="/svg/chevron-down.svg"
              alt=""
              layout="intrinsic"
              width={30.705}
              height={18.634}
              onClick={handleProjectsScroll}
            />
          </div> */}
        </div>
        <div className="col-start-7 col-span-5 items-end">
          <Image
            src="/svg/undraw_solution_mindset.svg"
            alt=""
            layout="responsive"
            height={902.402}
            width={815.631}
            className="col-start-6"
          />
        </div>
      </div>
      <div className="bg-gray-100" ref={projectsRef}>
        <div className="grid">
          <SectionTitle title="projects" />
          <ProjectsView projects={projects} />
        </div>
      </div>
      <div ref={aboutRef} className="grid mb-12">
        <SectionTitle title="about" />
        <AboutView about={about} />
      </div>
      <div className="bg-gray-100 grid" ref={contactRef}>
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
