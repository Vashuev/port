import React, { useEffect } from "react";
import "./terms.scss";
const Privacy = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_contanier">
      <h2>Privacy Policy</h2>
      <div className="terms_div">
        <h2>Introduction:</h2>
        <p>
          Welcome to WebStimulate! This Privacy Policy outlines how we collect,
          use, and protect your personal information when you visit our website
          or engage with our services. By using www.webstimulate.in you agree to
          the terms outlined in this policy.
        </p>
      </div>
      <div className="terms_div">
        <h2>Information We Collect:</h2>
        <ul>
          <li>
            Personal Information: When you register for camps, courses, or
            events, we collect your name, contact details, and other necessary
            information.
          </li>
          <li>
            Usage Data: We may collect data on how you interact with our website
            and services for analytics and improvements.
          </li>
        </ul>
      </div>
      <div className="terms_div">
        <h2>How We Use Your Information:</h2>
        <ul>
          <li>
            Personalization: Your information helps us personalize your
            experience and provide content relevant to your interests.
          </li>
          <li>
            Communication: We may use your contact details to inform you about
            upcoming events, courses, or important updates.
          </li>
        </ul>
      </div>
      <div className="terms_div">
        <h2>Data Security:</h2>
        <p>
          We prioritize the security of your information and employ
          industry-standard measures to protect it from unauthorized access.
        </p>
      </div>
      <div className="terms_div">
        <h2>Disclosure to Third Parties:</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to third parties. However, trusted third
          parties assisting us in operating our website or servicing you may
          have access to your information.
        </p>
      </div>
      <div className="terms_div">
        <h2>Your Choices:</h2>
        <p>
          You can manage your communication preferences and update your
          information through your account settings. If you wish to opt-out of
          specific communications, please contact us.
        </p>
      </div>
      <div className="terms_div">
        <h2>Changes to this Privacy Policy:</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices.
          Please review it periodically for any updates.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
