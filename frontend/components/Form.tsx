import React, { ReactNode } from "react";

import FormInput from "./FormInput";
import FormTextInput from "./FormTextInput";
import Button from "./Button";

type Props = {
  children?: ReactNode;
};

const Form = ({ children }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted!");
      }}
    >
      <div className="flex flex-col mx-40">
        {children}
        <Button className="bg-devBlue mx-auto" text="Send" type="submit" />
      </div>
    </form>
  );
};

Form.Input = FormInput;
Form.TextArea = FormTextInput;

export default Form;
