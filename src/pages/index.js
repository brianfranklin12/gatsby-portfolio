import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

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
  </>
)

export default IndexPage
