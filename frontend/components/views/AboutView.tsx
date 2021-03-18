import React, { useState } from "react";
import Image from "next/image";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import Modal from "react-modal";

import Button from "../Button";

import { getStrapiMedia, getStrapiURL } from "../../utils/media";

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
  const handleModalClose = () => setOpen(false);

  const handleOpenModal: any = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-start-4 col-span-6">
          <Image
            src={getStrapiMedia(about.profilePic)}
            layout="responsive"
            height={about.profilePic.height}
            width={about.profilePic.width}
          />
        </div>
        <p className="col-start-4 col-span-6 text-xl my-16">{about.body}</p>

        <Button
          className="col-start-6 col-span-2 mx-auto"
          onClick={handleOpenModal}
        >
          Resume
        </Button>
        <Modal isOpen={open} onRequestClose={handleModalClose}>
          {/* <Document
            // className="mx-auto"
            file={getStrapiURL(about.resume.url)}
            >
            <Page
            // className="mx-auto"
            // width={250}
            // scale={0.75}
            // renderMode="svg"
            pageNumber={1}
            />
          </Document> */}
          <Image
            src={getStrapiMedia(about.resume)}
            height={about.resume.height}
            width={about.resume.width}
          />
          <Button className="w-full mx-auto" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default AboutView;
