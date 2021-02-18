import React from "react";

type Props = {
  placeholder?: string;
  handleChange: any;
  value: string;
  className?: string;
};

const FormInput = ({
  className = "",
  placeholder,
  handleChange,
  value,
}: Props) => {
  return (
    <input
      className={`${className} m-1 p-3`}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder || "Enter Text Here"}
    />
  );
};

export default FormInput;
