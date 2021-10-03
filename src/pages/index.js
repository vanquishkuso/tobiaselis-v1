import * as React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import FirstSection from "../components/FirstSection";
import Contact from "../components/Contact";
import Seo from "../components/seo";

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {

  //   }
  // `)
  return (
    <Layout>
      <Seo title="Tobias Elis - Effektiv webbutveckling" description="Effektiva, snabba webbplatser och e-handelswebbplatser. " />
      <Banner />
      <FirstSection />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
