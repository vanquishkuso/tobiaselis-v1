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
  const projectData = data.allProjectDataJson.edges;
  console.log(data);
  const getProjects = (data) => {
    const projects = [];
    data.allProjectDataJson.edges.forEach((item, i) => {
      projects.push(
        <ProjectCard key={i}>
          <ProjectImg
            alt={item.node.title}
            image={item.node.image.childImageSharp.gatsbyImageData}
          />
          <ProjectInfo>
            <TextWrap>
              <Category>{item.node.category}</Category>
              <ProjectTitle>{item.node.title}</ProjectTitle>
              <p>{item.node.short_description}</p>
            </TextWrap>
          </ProjectInfo>
          <Button
            to={`/projekt/${item.node.slug}`}
            primary="true"
            round="true"
            style={{ width: "115px", marginTop: "auto", margin: "auto 2rem" }}
          >
            Läs mer
          </Button>
        </ProjectCard>
      );
    });
    return projects;
  };

  return (
    <Container>
      <Header>Projekt</Header>
      <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  min-height: 100vh;
  margin-top: -7rem;
  padding: 3rem calc((100vw - 1300px) / 2);
  color: #fff;
  padding-bottom: 7rem;
  background-color: #40248b;
`;

const Header = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f8f8f8;
  margin-top: 3rem;
  font-weight: 300;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  grid-gap: 3rem;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-gap: 3rem;
    padding-bottom: 3rem;
  }
`;

const ProjectCard = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  line-height: 2;
  // width: 100%;
  height: 500px;
  width: 350px;
  position: relative;
  border-radius: 10px;

  /* transition: 0.3s;
  filter: brightness(70%);
  &:hover {
    filter: brightness(100%);
  } */
`;

const ProjectImg = styled(GatsbyImage)`
  height: 50%;
  max-width: 100%;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 2em;
`;

const ProjectInfo = styled.p`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  color: #222222;
  margin-top: -1rem;
`;

const ProjectTitle = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Category = styled.p`
  color: #6b6b6b;
  font-weight: 400;
`;
