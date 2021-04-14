import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="grid grid-auto-flow grid-cols-12 gap-3 my-10">
      <div className="col-start-2 col-span-10 grid grid-cols-12">
        <h1 className="md:text-4xl font-display col-span-2">{title}</h1>
        <div className="col-start-4 md:col-start-3 my-auto col-span-full">
          <hr
            style={{
              height: "2px",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
