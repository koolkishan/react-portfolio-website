import Contact from "components/Contact";
import Footer from "components/Footer";
import Home from "components/Home";
import Milestones from "components/Milestones";
import Services from "components/Services";
import React from "react";

export default function App() {
  return (
    <div>
      <Home />
      <Services />
      <Milestones />
      <Contact />
      <Footer />
    </div>
  );
}
