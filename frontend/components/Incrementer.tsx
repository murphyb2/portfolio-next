import React from "react";

type Props = {
  nextLabel: string;
  prevLabel: string;
  value: string | number;
  handleIncrement: any;
  handleDecrement: any;
  className?: string;
};
const Incrementer = ({
  nextLabel,
  prevLabel,
  handleDecrement,
  handleIncrement,
  value,
  className = "",
}: Props) => {
  return (
    <div className={`${className}`}>
      <button onClick={handleDecrement}>{prevLabel}</button>
      <p className="font-bold">{value}</p>
      <button onClick={handleIncrement}>{nextLabel}</button>
    </div>
  );
};

export default Incrementer;
