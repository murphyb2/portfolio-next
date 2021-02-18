import React, { useState } from "react";
import Form from "../Form";
import Button from "../Button";

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <p className="text-center">
        Need anything built? Just want to say hello? <br />
        Email me at brymurph@gmail.com or fill out the form below!
      </p>
      <div className="grid grid-cols-12">
        <Form className="grid grid-cols-12 col-start-4 col-span-6">
          <Form.Input
            className="col-span-full"
            value={name}
            handleChange={(e: any) => setName(e.target.value)}
            placeholder="Name"
          />
          <Form.Input
            className="col-span-full"
            value={email}
            handleChange={(e: any) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Form.TextArea
            className="col-span-full"
            value={msg}
            handleChange={(e: any) => setMsg(e.target.value)}
            placeholder="Message"
          />
          <Button
            className="m-1 col-span-2 col-start-11"
            text="Send"
            type="submit"
          />
        </Form>
      </div>
    </>
  );
};

export default ContactView;
