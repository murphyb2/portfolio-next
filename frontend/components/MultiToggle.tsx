import React, { ReactNode, useEffect, useState } from "react";
import Button from "./Button";

type Props = {
  className?: string;
  disabled?: boolean;
  labels: string[];
  handleSelectionChanged: any;
};

const MultiToggle = ({
  className = "",
  disabled = false,
  labels,
  handleSelectionChanged,
}: Props) => {
  const [selected, setSelected] = useState(labels[0]);
  useEffect(() => {
    handleSelectionChanged(selected);
  }, [selected]);
  return (
    <>
      {labels &&
        labels.map((label) => (
          <Button
            overrideDefaultStyles={`${
              selected == label ? "bg-black text-white" : "bg-white text-black"
            } px-5 py-2`}
            key={label}
            onClick={() => setSelected(label)}
          >
            {label}
          </Button>
        ))}
    </>
  );
};

export default MultiToggle;
