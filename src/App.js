import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Milestones from "components/Milestones";
import Pricing from "components/Pricing";
import ScrollToTop from "components/ScrollToTop";
import Services from "components/Services";
import React from "react";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Services />
      <Milestones />
      <Pricing />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
