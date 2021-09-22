import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($slug: String!) {
    projectDataJson(slug: { eq: $slug }) {
      title
      description
      short_description
      frontend
      backend
      id
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
          # fluid {
          #   ...GatsbyImageSharpFluid
          # }
        }
      }
    }
  }
`;

const Project = ({ data }) => {
  const project = data.projectDataJson;
  return (
    <div>
      <h1>{project.title}</h1>
      <GatsbyImage
        image={project.image.childImageSharp.gatsbyImageData}
        alt={project.tile}
        style={{ float: "left", marginRight: "1rem", width: "150" }}
      />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
