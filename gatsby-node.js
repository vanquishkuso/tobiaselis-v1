exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProjectDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
    if(results.error) {
      console.error("Something went wrong");
      return;
    }
  results.data.allProjectDataJson.edges.forEach(edge => {
    const project = edge.node;
    createPage({
      path: `/projekt/${project.slug}/`,
      component: require.resolve('./src/templates/project.jsx'),
      context: {
        slug: project.slug,
      }
    })
  })
};
