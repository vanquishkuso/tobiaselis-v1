module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
