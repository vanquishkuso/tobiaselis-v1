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
      component: require.resolve('./src/pages/templates/project.jsx'),
      context: {
        slug: project.slug,
      }
    })
  })
};

//  exports.createPages = ({ actions: { createPage } }) => {
//    const projects = require("./src/data/ProjectData.json");
//    projects.forEach((project) => {
//      createPage({
//        path: `/projekt/${project.slug}/`,
//        component: require.resolve("./src/pages/templates/project.jsx"),
//        context: {
//          title: project.title,
//          category: project.category,
//          short_description: project.ort_description,
//          description: project.desWcription,
//          frontend: project.frontend,
//          backend: project.backend,
//          image: project.image,
//        },
//      });
//    });
//  };
