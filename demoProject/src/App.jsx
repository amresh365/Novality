import { useState } from "react";
import "./App.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Home } from "./component/Home";
import { Service } from "./component/Service";
import { Myproject } from "./component/Myproject";
import { CaseStudy } from "./component/CaseStudy";
import { Testimonials } from "./component/Testimonials";
import { Plan } from "./component/Plan";
import { Blogs } from "./component/Blogs";
import { Contact } from "./component/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Service />
      <Myproject />
      <CaseStudy />
      <Testimonials />
      <Plan />
      <Blogs />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
