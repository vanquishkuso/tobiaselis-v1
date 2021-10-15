import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Button } from "./Button";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectDataJson {
        edges {
          node {
            backend
            category
            description
            frontend
            id
            short_description
            slug
            title
            link
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  const getProjects = (data) => {
    const projects = [];
    data.allProjectDataJson.edges.forEach((item, i) => {
      projects.push(
        <ProjectCard key={i}>
          <ImageWrapper>
            <ProjectImg
              alt={item.node.title}
              image={item.node.image.childImageSharp.gatsbyImageData}
            />
          </ImageWrapper>
          <ProjectInfo>
            <TextWrap>
              <Category>{item.node.category}</Category>
              <ProjectTitle>{item.node.title}</ProjectTitle>
              <p style={{ color: "#f8f8f8" }}>{item.node.short_description}</p>
            </TextWrap>
          </ProjectInfo>
          {item.node.link != null ? (
            <ProjectButton
              to={`/projekt/${item.node.link}`}
              //  to={`/projekt/${item.node.slug}`}
              primary="true"
              round="true"
            >
              Besök webbplatsen
            </ProjectButton>
          ) : (
            ""
          )}
        </ProjectCard>
      );
    });
    return projects;
  };

  return (
    <Container id="projekt">
      <Header>Projekt</Header>
      <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  min-height: 70vh;
  margin-top: -7rem;
  padding: 3rem calc((100vw - 1300px) / 2);
  color: #fff;
  padding-bottom: 7rem;
  background-color: #f8f8f8;
`;

const Header = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #272727;
  margin-top: 3rem;
  font-weight: 500;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  justify-content: center;

  grid-gap: 5rem;
  @media screen and (max-width: 768px) {
    grid-gap: 3rem;
    padding-bottom: 3rem;
  }
`;

const ImageWrapper = styled.div`
  height: 250px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProjectImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 2em;
  transition: transform 0.5s ease;
  overflow: hidden;
`;

const ProjectCard = styled.div`
  background-color: #5c38c0;
  display: flex;
  flex-direction: column;
  line-height: 2;
  // width: 100%;
  height: 500px;
  width: 350px;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  filter: brightness(90%);
  &:hover {
    filter: brightness(110%);
  }

  &:hover ${ProjectImg} {
    transform: scale(1.2);
  }
  transition: 0.5s ease;
  overflow: hidden;
  @media screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ProjectInfo = styled.p`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const ProjectButton = styled(Button)`
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const TextWrap = styled.div`
  margin-top: -1rem;
  width: 100%;
  height: auto;
`;

const ProjectTitle = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
  color: #f8f8f8;
`;

const Category = styled.p`
  color: #f8f8f8;
  font-weight: 400;
`;
