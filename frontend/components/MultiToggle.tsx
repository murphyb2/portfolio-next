import React, { ReactNode, useEffect, useState } from "react";
import Button from "./Button";

type Props = {
  className?: string;
  disabled?: boolean;
  labels: string[];
  handleSelectionChanged: any;
  initialSelectedIndex?: number;
};

const MultiToggle = ({
  className = "",
  disabled = false,
  labels,
  handleSelectionChanged,
  initialSelectedIndex = 0,
}: Props) => {
  const [selected, setSelected] = useState(labels[initialSelectedIndex]);
  useEffect(() => {
    handleSelectionChanged(selected);
  }, [selected]);
  return (
    <div className={`${className}`}>
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
    </div>
  );
};

export default MultiToggle;
