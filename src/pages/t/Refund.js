import React, { useEffect } from "react";
import "./terms.scss";
const Refund = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_contanier">
      <h3>Cancellation and Refund Policy</h3>
      <p>Last Updated: 11 November, 2023</p>
      <div className="terms_div">
        <h2>1. Cancellation and Refund Policy Overview</h2>
        <p>
          Thank you for choosing scared2compile for your online IT training
          needs. We strive to provide quality services to our users. This
          Cancellation and Refund Policy outlines the terms under which
          cancellations and refunds are processed.
        </p>
      </div>
      <div className="terms_div">
        <h2>2. Cancellation</h2>
        <p>
          2.1 Cancellation Period: <br /> You may request a cancellation of our
          IT training services at any time.
        </p>
        <p>
          2.2 Cancellation Process:: <br />
          To initiate a cancellation, please contact our support team at
          scared2compile0@gmail.com Include your full name, contact information,
          and details of the purchased service.
        </p>
        <p>
          2.3 Post 2-Day Cancellation: <br /> While you can cancel at any time,
          please note that no refunds will be provided for cancellation requests
          made after 2 days of the purchase date.
        </p>
      </div>
      <div className="terms_div">
        <h2>3. Refund</h2>
        <p>
          3.1 Refund Amount:
          <br />
          If a cancellation request is made within 2 days of the purchase date,
          a refund of 75% of the paid amount will be processed.
        </p>
        <p>
          3.2 Refund Process:
          <br /> Refunds will be processed to the original payment method used
          during the purchase.
        </p>
        <p>
          3.3 Post 2-Day Refund:
          <br /> No refunds will be provided for cancellation requests made
          after 2 days of the purchase date.
        </p>
      </div>
      <div className="terms_div">
        <h2>4. Exceptions</h2>
        <p>
          4.1 Service Utilisation:
          <br />
          Refunds will not be issued if the services have been fully utilised or
          if there is evidence of completion or access to course materials.
        </p>
        <p>
          4.2 Violations of Terms:
          <br /> No refunds will be provided if a user is found to be in
          violation of the terms and conditions outlined in our Terms and
          Conditions.
        </p>
      </div>
      <div className="terms_div">
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at scared2compile0@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Refund;
