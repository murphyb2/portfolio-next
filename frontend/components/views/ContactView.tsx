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
        "Hm.. Something went wrong. If issues persist please email me directly at brymurph@gmail.com"
      );
    }
    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <p className="col-start-2 col-span-10 text-center">
          Need anything built? Just want to say hello? <br />
          Email me at brymurph@gmail.com or fill out the form below!
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
          <p className="m-1 col-span-10 text-center">{success || error}</p>
          <Button
            className="m-1 col-span-3 col-start-10 md:col-span-2 md:col-start-11"
            disabled={loading}
            text={loading ? "Sending..." : "Send"}
            type="submit"
            onClick={(e: any) => handleSubmit(e)}
          />
        </Form>
      </div>
    </>
  );
};

export default ContactView;
