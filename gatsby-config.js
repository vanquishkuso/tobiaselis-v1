module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tobiaselis.se",
    title: "tobiaselis",
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-inline-svg",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
