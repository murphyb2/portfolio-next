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
    <textarea
      className={`${className} m-1 p-3`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder || "Enter Text Here"}
    />
  );
};

export default FormInput;
