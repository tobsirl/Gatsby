/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const userTemplate = path.resolve(`src/templates/user.js`)

  const result = await graphql(
    `
      query Users {
        allRandomUser {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  return result.data.allRandomUser.edges.forEach((edge) => {
    console.log(edge.node.id);
    createPage({
      path: `/users/${edge.node.id}`,
      component: path.resolve(userTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })
}
