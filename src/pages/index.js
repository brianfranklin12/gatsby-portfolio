import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import About from "../components/About";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";

import "../styles/styles.css"

const IndexPage = () => (
  <>
  <Helmet
    htmlAttributes={{
      lang: "en"
    }}
  >
    <meta charSet="utf-8" />
    <title>Brian Franklin</title>
  </Helmet>
  <Banner />
  <Navigation />
  <About />
  {/* <Projects />
  <Contact /> */}
  </>
)

export default IndexPage
