import * as React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import FirstSection from "../components/FirstSection";
import Contact from "../components/Contact";
import Seo from "../components/seo";
import CookieConsent from "react-cookie-consent";

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {

  //   }
  // `)
  return (
    <Layout>
      <Seo title="Tobias Elis - Effektiv webbutveckling" description="Effektiva, snabba webbplatser och e-handelswebbplatser. " />
      <CookieConsent acceptOnScroll={false} buttonText="Jag förstår" buttonStyle={{color: "#fff", background: "#077bf1", borderRadius: "50px", padding: "16px 40px", fontSize: "16px"}}>Webbplatsen använder cookies för en bra användarupplevelse, fortsätter du att surfa på webbplatsen antas ditt samtycke för detta.</CookieConsent>
      <Banner />
      <FirstSection />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
