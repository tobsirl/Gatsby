/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const fetchStates = async ({ actions, createNodeId, createContentDigest }) => {
  console.log(`Fetch States into Nodes! ❤`)
  // 1. Fetch list of states
  // 2. Loop over each one
  // 3. Create a node for each state
}

exports.sourceNodes = async params => {
  // fetch a list of states and source them into gatsby API
  await Promise.all([fetchStates(params)])
}

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

  return result.data.allRandomUser.edges.forEach(edge => {
    createPage({
      path: `/users/${edge.node.id}`,
      component: path.resolve(userTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
