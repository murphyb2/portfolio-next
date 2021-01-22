import React from "react";

type Props = {
  placeholder?: string;
  handleChange: any;
  value: string;
};

const FormInput = ({ placeholder, handleChange, value }: Props) => {
  return (
    <textarea
      className="m-1 p-3"
      value={value}
      onChange={handleChange}
      placeholder={placeholder || "Enter Text Here"}
    />
  );
};

export default FormInput;
