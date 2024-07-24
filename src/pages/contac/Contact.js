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
  const [number, setNnumber] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState("");
  const [sent, setSent] = useState("");
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE;
  const userID = process.env.REACT_APP_PYBLIC;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: {
        name,
        email,
        number,
        message,
      },
    };
    const headers = { "Content-Type": "application/json" };
    setSending(true);
    setSent(false);
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        { headers }
      );
      setSending(false);
      setEmail("");
      setMessage("");
      setName("");
      setNnumber("");
      setSent(true);
    } catch (error) {
      console.log(error);
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
        <h1>Welcome to Scared2Compile!</h1>
        <p>
          If you have any questions, or feedback, or need support, please don't
          hesitate to reach out to us. Fill out the form below and our team will
          get back to you as soon as possible.
        </p>
        <button onClick={scrollToElement}>Contact Us</button>
      </div>
      <div className="contact_form" ref={myElementRef}>
        <div className="contact_form_title">
          <h2>Contact Us</h2>
          <p>
            Provide a user-friendly contact form for visitors to easily reach
            out to you. Make it convenient for visitors to send their inquiries
            and feedback directly through the website.
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
              onChange={(e) => setNnumber(e.currentTarget.value)}
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
