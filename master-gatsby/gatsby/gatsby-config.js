import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick's Slices`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `The best place place in the world`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      // this is the name of the plugin you are adding
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `35ani96r`,
        data: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
