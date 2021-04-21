import React from "react";

type Props = {
  nextLabel: string;
  prevLabel: string;
  value: string | number;
  handleIncrement: any;
  handleDecrement: any;
  className?: string;
  hideValue?: boolean;
};
const Incrementer = ({
  nextLabel,
  prevLabel,
  handleDecrement,
  handleIncrement,
  value,
  className = "",
  hideValue = false,
}: Props) => {
  return (
    <div className={`${className}`}>
      <button
        onClick={handleDecrement}
        className="bg-black text-white px-3 py-1"
      >
        {prevLabel}
      </button>
      {!hideValue && <p className="font-bold my-auto">{value}</p>}
      <button onClick={handleIncrement} className="bg-white  px-3 py-1">
        {nextLabel}
      </button>
    </div>
  );
};

export default Incrementer;
