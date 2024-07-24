import React, { useEffect, useState } from "react";
import "./faq.scss";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
const Faq = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const arr = [
    {
      q: "What is the typical timeline for developing a website?",
      a: "The timeline for developing a website can vary depending on the complexity and size of the project. On average, a standard business website takes about 6-8 weeks to complete, while more complex sites can take 3-6 months.",
    },
    {
      q: "What does the web devlopment process look like?",
      a: "Planning & Design -> content creation & collection -> devlopment & documentation -> Testing -> Deployment & Launch.",
    },
    {
      q: "How much will it cost to develop a website?",
      a: "The cost of developing a website depends on various factors such as the number of pages, design complexity, functionality requirements, and additional services like SEO and content creation. We provide a detailed quote after understanding your specific needs.",
    },
    {
      q: "What information do you need from me to start the project?",
      a: "We need detailed information about your business, target audience, website goals, desired features and functionalities, branding guidelines, and any existing content you want to use. We will guide you through a requirements gathering process to ensure we have everything we need.",
    },
    {
      q: "Can you help me with content creation for my website?",
      a: "Yes, we offer content creation services, including writing, editing, and optimizing content for SEO. We can also work with any existing content you have and suggest improvements.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. We ensure that all our websites are responsive and provide an optimal viewing experience on desktops, tablets, and mobile devices.",
    },
    {
      q: "Can I see the design before the website goes live?",
      a: "Yes, we provide design mockups and wireframes for your review and approval before we start the development process. We incorporate your feedback to ensure the final design meets your expectations.",
    },
    {
      q: "What kind of functionalities can you integrate into my website?",
      a: "We can integrate various functionalities such as contact forms, e-commerce capabilities, booking systems, social media integration, blogs, photo galleries, and more. We tailor the features to match your specific business needs.",
    },
    {
      q: "Can I update the website content myself after it’s built?",
      a: "Yes, we typically build websites on user-friendly Content Management Systems (CMS), which allows you to easily update content, add new pages, and make other changes without needing technical knowledge.",
    },
    {
      q: "Will my website be optimized for search engines (SEO)?",
      a: "Yes, we implement basic SEO practices, including keyword optimization, meta tags, and proper URL structures. For more comprehensive SEO services, we offer specialized packages.",
    },
    {
      q: "How do you ensure the website loads quickly?",
      a: "We optimize images, use efficient coding practices, and leverage caching and content delivery networks (CDNs) to ensure fast loading times. We also conduct performance testing to identify and address any bottlenecks.",
    },
    {
      q: "What happens after the website is launched?",
      a: "After launch, we provide a period of post-launch support to address any issues that arise. We also offer ongoing maintenance packages to ensure your website remains updated, secure, and performs well.",
    },
    {
      q: " Do you offer website hosting services?",
      a: "No, There are many hosting service provider with updated securities and custom pricing.",
    },
    {
      q: "How do you handle website security?",
      a: "We implement security best practices, including SSL certificates, secure coding practices, regular updates, and backups. We also offer advanced security solutions for clients with higher security requirements.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes, we offer website redesign services. We can revamp your existing site to improve its design, functionality, and performance while retaining your brand identity.",
    },
    {
      q: "What if I need additional features or changes after the website is completed?",
      a: "We are always here to help with any additional features or changes you need. We can discuss your requirements and provide a quote for the additional work.",
    },
  ];
  const [i, setI] = useState(null);

  return (
    <div className="faq_container">
      <div className="faq_title" data-aos="fade-up">
        <h2>
          Frequently Asked Questions About Our Services, Process, and Support
        </h2>
        <p>Have Questions? We've Got Answers</p>
      </div>
      <div className="faq_divs">
        {arr.map((item, index) => {
          return (
            <div className="faq_div" key={index} data-aos="fade-up">
              <div className="faq_q_container">
                <h3>{item.q}</h3>
                <div>
                  <img
                    src={plus}
                    alt=""
                    className={`q_btn ${i == index && "q_btn_0"}`}
                    onClick={() => setI(index)}
                  />
                  <img
                    src={minus}
                    alt=""
                    className={`q_btn ${i !== index && "q_btn_0"}`}
                    onClick={() => setI(null)}
                  />
                </div>
              </div>
              <div className={`wrapper ${i == index && "show"}`}>
                <p className="ans_div">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
