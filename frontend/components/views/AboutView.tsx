import React, { useState } from "react";
import Image from "next/image";

import Modal from "react-modal";

import Button from "../Button";

import { getStrapiMedia, getStrapiURL } from "../../utils/media";
import FadeInSection from "../FadeInSection";

type Props = {
  about: any;
};

Modal.setAppElement("#__next");
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "5px",
    left: "5px",
    right: "5px",
    bottom: "5px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    // padding: "20px",
  },
};

const AboutView = ({ about }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal: any = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6">
          <FadeInSection>
            <Image
              src={getStrapiMedia(about.profilePic)}
              layout="responsive"
              height={about.profilePic.height}
              width={about.profilePic.width}
            />
          </FadeInSection>
        </div>
        <p className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 text-xl my-16">
          {about.body}
        </p>

        <Button
          className="col-start-6 col-span-2 mx-auto"
          onClick={handleOpenModal}
        >
          Resume
        </Button>
        <Modal isOpen={open}>
          <Button
            className="absolute w-1/4 z-50 m-2"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Image
            src={getStrapiMedia(about.resume)}
            layout="fill"
            objectFit="contain"
          />
        </Modal>
      </div>
    </>
  );
};

export default AboutView;
