import React, { useState, useEffect } from "react";
import Form from "../Form";
import Button from "../Button";
import axios from "axios";

const ContactView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!!success || !!error) {
      console.log("clearing");
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!message || !name || !email) {
      setError("All fields are required!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email`, {
        name,
        email,
        message,
      });
      console.log(res);
      setSuccess(
        "Message Sent! Thanks for reaching out! I will reply as soon as possible!"
      );
      setMessage("");
      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
      setError(
        "Hm.. Something went wrong. If issues persist please email me directly at admin@bryan-murphy-dev.com"
      );
    }
    setLoading(false);
  };

  return process.env.EMAIL_ENABLED ? (
    <>
      <div className="grid grid-cols-12">
        <p className="col-start-2 col-span-10 text-center">
          Need anything built? Just want to say hello? <br />
          Find me on LinkedIn using the icon below! <br />
          Or email me at bryan-murphy-dev@gmail.com!
        </p>
        <Form className="grid grid-cols-12 col-start-2 col-span-10 md:col-start-4 md:col-span-6">
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
            value={message}
            handleChange={(e: any) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <p className="m-1 col-span-full text-center">{success || error}</p>
          <Button
            className={`${
              loading ? "animate-pulse" : ""
            } m-1 col-span-4 col-start-9 md:col-span-2 md:col-start-11`}
            disabled={loading}
            text={loading ? "Sending..." : "Send"}
            type="submit"
            onClick={(e: any) => handleSubmit(e)}
          />
        </Form>
      </div>
    </>
  ) : (
    <div className="grid grid-cols-12">
      <p className="col-start-2 col-span-10 text-center">
        Need anything built? Just want to say hello? <br />
        Find me on LinkedIn using the icon below! <br />
        Or email me at bryan-murphy-dev@gmail.com!
      </p>
    </div>
  );
};

export default ContactView;
