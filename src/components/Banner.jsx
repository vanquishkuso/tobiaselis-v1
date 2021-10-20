import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { graphql, useStaticQuery } from "gatsby";
import SplitText from "react-pose-text";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderAnimation = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50,
  },
};

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      imageDataJson(title: { eq: "background-image" }) {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, formats: JPG, quality: 100)
          }
        }
      }
    }
  `);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Container id="hem">
        <Background>
          <Img
            image={data.imageDataJson.image.childImageSharp.gatsbyImageData}
          />
        </Background>
        <Content>
          <Items>
            <TextWrapper>
              <Header
                initialPose="exit"
                pose="enter"
                charPoses={HeaderAnimation}
              >
                Effektiv    webbutveckling
              </Header>
              {/* <Paragraph  initialPose="exit" pose="enter" charPoses={HeaderAnimation}>wqdwqwd</Paragraph> */}
            </TextWrapper>
            <Link
              to="kontakt"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Button big="true" round="true" primary="true">
                Kontakta mig
              </Button>
            </Link>
          </Items>
        </Content>
      </Container>
    </div>
  );
};

export default Banner;

const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
  /* margin: 0 auto; */

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Img = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const Content = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  color: #f8f8f8;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #f8f8f8;
  line-height: 1.1;
`;

const Header = styled(SplitText)`
  font-size: clamp(2rem, 3.9vw, 4rem);
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
  color: #f8f8f8;
`;

const Paragraph = styled(SplitText)`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;

const TextWrapper = styled.div`
  margin-bottom: 2rem;
`;
