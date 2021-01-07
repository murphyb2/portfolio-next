import React, { useState } from "react";

import Form from "../Form";

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div>
      <p className="text-center">
        Need anything built? Just want to say hello? <br />
        Email me at brymurph@gmail.com or fill out the form below!
      </p>
      <Form>
        <Form.Input
          value={name}
          handleChange={(e: any) => setName(e.target.value)}
          placeholder="Name"
        />
        <Form.Input
          value={email}
          handleChange={(e: any) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Form.TextArea
          value={msg}
          handleChange={(e: any) => setMsg(e.target.value)}
          placeholder="Message"
        />
      </Form>
    </div>
  );
};

export default ContactView;
