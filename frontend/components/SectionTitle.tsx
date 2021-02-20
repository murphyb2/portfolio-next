import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="grid grid-auto-flow grid-cols-12 gap-3 my-10">
      <div className="col-start-2 col-span-10 grid grid-cols-footer">
        <h1 className="text-4xl font-display">{title}</h1>
        <hr
          className="ml-7 my-auto"
          style={{
            height: "2px",
            backgroundColor: "black",
          }}
        />
      </div>
    </div>
  );
};

export default SectionTitle;
