/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions;
  
//     if (node.internal.type === `MarkdownRemark`) {
//       const value = createFilePath({ node, getNode });
//       createNodeField({
//         name: `slug`,
//         node,
//         value
//       });
//     }
//   };

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const postTemplate = require.resolve(`./src/templates/postTemplate.js`)
    const result = await graphql(`
      {

        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "blog" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            ) {
            edges {
                node {
                frontmatter {
                    slug
                }
                }
            }
        }
      }
    `)
    //markdown-pages

    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }