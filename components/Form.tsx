import React, { ReactNode } from "react";

import FormInput from "./FormInput";
import FormTextInput from "./FormTextInput";

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
        <button className="bg-devBlue mx-auto" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

Form.Input = FormInput;
Form.TextArea = FormTextInput;

export default Form;
