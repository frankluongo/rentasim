/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    business: {
      email: "info@rentasim.co",
      phone: "267-225-2688",
    },
    navigation: [
      { title: "Home", url: "#home" },
      { title: "How it works", url: "#how-it-works" },
      { title: "Our Company", url: "#our-company" },
      { title: "Get in touch", url: "#get-in-touch" },
    ],
    title: `Rent a Sim`,
    siteUrl: `https://rentasim.co/`,
    socials: [
      {
        icon: "Instagram",
        name: "@rent.a.sim on instagram",
        link: "//instagram.com/rent.a.sim",
      },
      {
        icon: "Facebook",
        name: "Rent a Sim on facebook",
        link: "//www.facebook.com/profile.php?id=100093694346928",
      },
      {
        icon: "Twitter",
        name: "@rent_a_sim on twitter",
        link: "//twitter.com/rent_a_sim",
      },
      {
        icon: "TikTok",
        name: "@rent.a.sim on tiktok",
        link: "//www.tiktok.com/@rent.a.sim",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: { trackingId: "abc123" },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`urbanist\:400,500,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "#assets": "./assets",
          "#base": "./components/base",
          "#features": "./components/features",
          "#helpers": "./helpers",
          "#root": "./",
        },
      },
    },
  ],
};
