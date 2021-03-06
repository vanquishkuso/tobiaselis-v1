import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import FastSystem from "../assets/undraw_fast_loading_re_8oi3.svg";
import FastDeveloper from "../assets/undraw_Developer_activity_re_39tg.svg";
import Divider from "./divider";

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
        <div style={{ paddingBottom: "-2rem" }}>
          {" "}
          <SectionWrapper order={i}>
            <Header order={i}>{item.node.title}</Header>
            <Wrapper order={i}>
              {/* <Img
              image={item.node.image.childImageSharp.gatsbyImageData}
              style={{ order: i }}
            /> */}
              {i === 0 ? (
                <Illustration order={0} />
              ) : (
                <Illustration2 order={1} />
              )}
              <TextWrapper order={i === 0 ? true : true}>
                <Text order={i}>{item.node.description}</Text>
              </TextWrapper>
            </Wrapper>
          </SectionWrapper>
        </div>
      );
    });
    return sections;
  };
  return <Container> {getSectionData(data)}</Container>;
};

export default FirstSection;

const Container = styled.div`
  color: #fff;
  height: auto;

`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 1rem;
  height: 100%;
  grid-auto-flow: dense;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0;
  }

  ${({order}) => order === 1 ? "margin-top: -5rem" : ""}
`;

const SectionWrapper = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);

  ${({ order }) =>
    order === 0 ? `background-color: #fff` : "background-color:  #5c38c0"};

  @media screen and (max-width: 768px) {
    ${({ order }) =>
      order === 0 ? "padding-bottom: 3rem" : "padding-bottom: 12rem"};
  }
`;

const Header = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  /* margin-bottom: 5rem; */
  color: #272727;
  margin-top: 1rem;
  font-weight: 500;
  ${({ order }) => (order === 1 ? "color: #f8f8f8" : "color: #272727")}
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: #222222;
  margin-bottom: 1em;

  ${({ order }) => (order === 1 ? "color: #f8f8f8" : "color: #272727")}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }

  ${({ order }) =>
    order === 1
      ? `  @media screen and (max-width: 768px) {
    display: none;
  }`
      : ""}

  ${({ order }) =>
    order &&
    `
  @media screen and (max-width: 768px) {
    margin-top: -14em;
  }
    `}
`;

const Illustration = styled(FastSystem)`
  width: 90%;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: clamp(50%, 65%, 100%);
    margin-top: -14rem;
    margin-bottom: 0.5rem;
  }

  ${({ order }) =>
    order === 1
      ? `
      order 1; @media screen and (max-width: 768px) {
    order: 0;
  }`
      : `@media screen and (max-width: 768px) {
    order: 0;
  }`}
`;

const Illustration2 = styled(FastDeveloper)`
  width: 90%;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: -16em;
    margin-bottom: -1.5rem;
    width: clamp(50%, 65%, 100%);
  }

  ${({ order }) =>
    order === 1
      ? `
      order 1; @media screen and (max-width: 768px) {
    order: 0;
  }`
      : `@media screen and (max-width: 768px) {
    order: 0;
  }`}
`;
