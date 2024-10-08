require("dotenv").config()

const siteName = "Sabrina S. Santos",
  siteDescription = "Desenvolvedor web, especialmente front-end, estudante de ciência de dados, com alguns conteúdos e um pouco de humor, espero que gostem"

const queries = require("./src/utils/algolia_queries")

const pluginsConfig = [
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-root-import`,
    options: {
      src: `${__dirname}/src`,
      assets: `${__dirname}/src/assets`,
      components: `${__dirname}/src/components`,
      pages: `${__dirname}/src/pages`,
      styles: `${__dirname}/src/styles`,
    },
  },
  /*{
     resolve: `gatsby-plugin-algolia-search`,
     options: {
       appId: process.env.GATSBY_ALGOLIA_APP_ID,
       apiKey: process.env.ALGOLIA_ADMIN_KEY,
       indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
       queries,
       chunkSize: 10000, // default: 1000
       enablePartialUpdates: true,
     },
   },
   */

  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/figures`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/posts`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteName,
      short_name: siteName,
      description: siteDescription,
      start_url: `/`,
      background_color: '#f6f6f6',
      theme_color: '#e0138c',
      display: 'minimal-ui',
      orientation: 'landscape-primary',
      icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  "gatsby-plugin-netlify-cms",
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images-v2",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            quality: 90,
            maxWidth: 960,
            withWebp: true,
            linkImagesToOriginal: false,
            disableBgImageOnAlpha: true,
            backgroundColor: "#f6f6f6",
          },
        },
        "gatsby-remark-static-images",
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.excerpt }],
              })
            })
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                  filter: {
                    frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        date
                        title
                        description
                      }
                      excerpt
                      fields {
                        slug 
                      }
                    }
                  }
                }
              }
            `,
          output: "/feed-posts.xml",
          title: "Sabrina S. Santos's Posts",
        },
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [
                  {
                    "content:encoded": `<p style='text-align:center'><a href='${site.siteMetadata.siteUrl + edge.node.fields.slug
                      }'><img src='${site.siteMetadata.siteUrl}${edge.node.frontmatter.coverImage
                      }' alt='${edge.node.frontmatter.transcription
                      }' height='285px' width='auto'></a></p>`,
                  },
                ],
              })
            })
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                  filter: {
                    frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        date
                        title
                        number
                        coverImage
                        transcription
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
          output: "/feed-comics.xml",
          title: "Sabrina S. Santos's Comics",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: [`/__generated/*`],
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  //`gatsby-plugin-offline`,
]

if (process.env.CONTEXT === "production") {
  pluginsConfig.push({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GOOGLE_TAGMANAGER_ID,
    },
  })
}

module.exports = {
  siteMetadata: {
    title: siteName,
    subtitle: `Sempre desenvolvendo, aprendendo e fazendo humor sobre isso, espero que gostem`,
    description: siteDescription,
    author: `johnywalves`,
    twitter: `@johnywalves`,
    siteUrl: `https://SabrinaSS.com`,
    siteUrlWithoutProtocol: `SabrinaSS.com`,
  },
  plugins: pluginsConfig,
}
