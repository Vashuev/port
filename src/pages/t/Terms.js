import React, { useEffect } from "react";
import "./terms.scss";

const Terms = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className="terms_contanier">
      <h3>Terms & Conditions</h3>
      <p>Last Updated: 11 November, 2023</p>
      <div className="terms_div">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the scared2compile website
          (www.growingseedtech.com) and our IT training services (the
          "Services"), you agree to comply with and be bound by these Terms and
          Conditions. If you do not agree to these terms, please do not use our
          Services.
        </p>
      </div>
      <div className="terms_div">
        <h2>2. Use of Services</h2>
        <p>
          2.1 Eligibility: <br /> You must be at least 18 years old to use our
          Services. If you are under 18, you may use the Services with the
          consent and involvement of a parent or legal guardian. By using the
          Services, you represent and warrant that you have obtained such
          consent.
        </p>
        <p>
          2.2 Cancellation Process: <br />
          To initiate a cancellation, please contact our support team at
          scared2compile0@gmail.com Include your full name, contact information,
          and details of the purchased service.
        </p>
        <p>
          2.3 Post 2-Day Cancellation:
          <br /> While you can cancel at any time, please note that no refunds
          will be provided for cancellation requests made after 2 days of the
          purchase date.
        </p>
      </div>
      <div className="terms_div">
        <h2>3. Payment and Refunds</h2>
        <p>
          3.1 Payment:
          <br /> Payment for our IT training courses is required before access
          is granted. Payment details are processed securely, and we do not
          store any payment information.
        </p>
        <p>
          3.2 Refunds:
          <br /> Refund policies are outlined on our website and are subject to
          change. It is your responsibility to review and understand our refund
          policies before making a purchase.
        </p>
      </div>
      <div className="terms_div">
        <h2>4. Intellectual Property</h2>
        <p>
          4.1 Ownership:
          <br />
          All content provided as part of the Services, including but not
          limited to course materials, videos, and text, is the property of
          Growing Seed Tech and is protected by copyright and other intellectual
          property laws.
        </p>
        <p>
          4.2 Licence:
          <br /> Subject to your compliance with these Terms and Conditions,
          Growing Seed Tech grants you a limited, non-exclusive,
          non-transferable, revocable licence to access and use the Services for
          personal, non-commercial purposes.
        </p>
      </div>
      <div className="terms_div">
        <h2>5. User Responsibilities</h2>
        <p>
          5.1 Code of Conduct:
          <br />
          You agree to use the Services in a manner consistent with all
          applicable laws and regulations and in accordance with these Terms and
          Conditions. You will not engage in any conduct that could damage,
          disable, or impair the functionality of the Services.
        </p>
        <p>
          5.2 Prohibited Activities:
          <br /> You are prohibited from engaging in any form of harassment,
          unauthorised advertising, or any other conduct that violates the
          rights of others or inhibits their use of the Services.
        </p>
      </div>
      <div className="terms_div">
        <h2></h2>
        <p></p>
      </div>
      <div className="terms_div">
        <h2>6. Privacy</h2>
        <p>
          6.1 Personal Information:
          <br /> We collect, use, and disclose your personal information in
          accordance with our Privacy Policy. By using our Services, you consent
          to such collection, use, and disclosure.
        </p>
      </div>
      <div className="terms_div">
        <h2>7. Termination</h2>
        <p>
          Scared2compile reserves the right to terminate or suspend your access
          to the Services at any time, with or without cause and with or without
          notice.
        </p>
      </div>
      <div className="terms_div">
        <h2>8. Changes to Terms and Conditions</h2>
        <p>
          Scared2compile may update these Terms and Conditions from time to
          time. Any changes will be effective immediately upon posting the
          revised version on the website. Your continued use of the Services
          after the posting of any changes constitutes acceptance of those
          changes.
        </p>
      </div>
      <div className="terms_div">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at scared2compile0@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Terms;
