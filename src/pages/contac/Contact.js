import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      number,
      message,
    };

    setSending(true);
    setSent(false);

    try {
      // POST request to the Django API
      const response = await axios.post("https://backend.webstimulate.in/api/contact/", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data); // Optional: Handle the response if needed

      // Reset the form and show the success message
      setSending(false);
      setEmail("");
      setMessage("");
      setName("");
      setNumber("");
      setSent(true);
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSending(false);
    }
  };

  const myElementRef = useRef(null);

  const scrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="contact_text">
        <div className="b_blur"></div>
        <h1>Welcome to WebStimulate!</h1>
        <p>
          If you have any questions, feedback, or need support related to our
          services in website development, app development, software
          development, or automation, please don't hesitate to reach out to us.
          Fill out the form below, and our team will get back to you as soon as
          possible.
        </p>
        <button onClick={scrollToElement}>Contact Us</button>
      </div>
      <div className="contact_form" ref={myElementRef}>
        <div className="contact_form_title">
          <h2>Contact Us</h2>
          <p>
            We offer comprehensive services in website development, app
            development, software development, and automation. Please use the
            form below to inquire about our offerings, or to provide feedback or
            requests.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_div">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form_div">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form_div">
            <label htmlFor="">Number (optional)</label>
            <input
              type="text"
              name="subject"
              value={number}
              onChange={(e) => setNumber(e.currentTarget.value)}
              placeholder="Enter your number"
            />
          </div>
          <div className="form_div">
            <label htmlFor="">Message</label>
            <input
              type="text"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.currentTarget.value)}
              placeholder="Enter your message"
            />
          </div>
          <div className="loading_btn">
            <button type="submit">Submit</button>
            {sending ? <div className="loading"></div> : <></>}
            {sent ? <p>Message has been sent!</p> : <></>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
