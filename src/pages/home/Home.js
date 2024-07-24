import React, { useRef } from "react";
import Hero from "./hero/Hero";
import Port from "./port/Port";
import Pres from "./pres/Pres";
import Design from "./design/Design";
import Responsive from "./responsive/Responsive";
import Test from "./test/Test";
import Presence from "./presence/Presence";
import "../../mix.scss";
const Home = () => {
  const myElementRef = useRef(null);

  const scrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero scrollToElement={scrollToElement} />
      <Port />
      <Pres myElementRef={myElementRef} />
      <Design />
      <Responsive />
      <Test />
      <Presence />
    </>
  );
};

export default Home;
