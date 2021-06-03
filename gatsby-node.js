const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    
  }
}


// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;

//     const postTemplate = require.resolve(`./src/templates/postTemplate.js`);
//     const result = await graphql(`
//       query{
//         allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}, sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `);


//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: `${node.fields.slug}`,
//         component: postTemplate,
//         context: {
//           // additional data can be passed via context
//           slug: `${node.fields.slug}`,},
//       })
//     })
// }

exports.createPages = async ({ graphql, actions }) => {
      const { createPage } = actions;
  
      const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`);
      const result = await graphql(`
        query{
          allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}, sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `);
  
  
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `${node.fields.slug}`,
          component: projectTemplate,
          context: {
            // additional data can be passed via context
            slug: `${node.fields.slug}`,},
        })
      })
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`);
    const result = await graphql(`
      query{
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "post"}}}, sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `);


    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: projectTemplate,
        context: {
          // additional data can be passed via context
          slug: `${node.fields.slug}`,},
      })
    })
}