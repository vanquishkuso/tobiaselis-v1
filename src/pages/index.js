import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Banner from "../components/Banner";
import Projects from "../components/Projects"
import FirstSection from "../components/FirstSection";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <FirstSection/>
      <Projects/>
      <Contact/>
    </Layout>
  );
};

export default IndexPage;
