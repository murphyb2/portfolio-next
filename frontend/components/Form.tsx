import React, { ReactNode } from "react";

import FormInput from "./FormInput";
import FormTextInput from "./FormTextInput";
import Button from "./Button";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Form = ({ children, className = "" }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted!");
      }}
      className={`${className}`}
    >
      {children}
    </form>
  );
};

Form.Input = FormInput;
Form.TextArea = FormTextInput;

export default Form;
