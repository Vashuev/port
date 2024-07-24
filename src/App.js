import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.scss";
import Home from "./pages/home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contac/Contact";

import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import Faq from "./pages/faq/Faq";
import Terms from "./pages/t/Terms";
import Refund from "./pages/t/Refund";
import Privacy from "./pages/t/Privacy";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const handleTogle = () => {
    if (theme == "dark") setTheme("light");
    if (theme == "light") setTheme("dark");
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={theme}>
      <main>
        <BrowserRouter>
          <Nav handleTogle={handleTogle} theme={theme} setTheme={setTheme} />
          <main>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Faq />} path="/faq" />
              <Route element={<Portfolio />} path="/portfolio" />
              <Route element={<Terms />} path="/terms" />
              <Route element={<Refund />} path="/refund" />
              <Route element={<Privacy />} path="/privacy" />
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
