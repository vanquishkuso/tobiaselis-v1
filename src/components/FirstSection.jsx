import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const FirstSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionDataJson {
        edges {
          node {
            id
            title
            description
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const getSectionData = (data) => {
    const sections = [];
    data.allSectionDataJson.edges.forEach((item, i) => {
      sections.push(
        <SectionWrapper>
          <Header>{item.node.title}</Header>
          <Wrapper>
            <Img
              image={item.node.image.childImageSharp.gatsbyImageData}
              style={{ order: i }}
            />
            <TextWrapper>
              <Text>
                {item.node.description}
              </Text>

            </TextWrapper>
          </Wrapper>
        </SectionWrapper>
      );
    });
    return sections;
  };
  return <Container>{getSectionData(data)}</Container>;
};

export default FirstSection;

const Container = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 1rem;
  margin-top: -1em;
  grid-auto-flow: dense;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const SectionWrapper = styled.div`
  padding-bottom: 10rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const Img = styled(GatsbyImage)`
  width: clamp(20vw, 100%, 100%);
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 768px) {
    width: 90%;
    order: 0 !important;
  }
`;

const Header = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #222222;
  font-weight: 300;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: #222222;
  margin-bottom: 1em;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
