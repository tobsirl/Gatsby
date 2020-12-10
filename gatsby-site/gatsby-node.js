/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
require("isomorphic-fetch")

const fetchStates = async ({ actions, createNodeId, createContentDigest }) => {
  // 1. Fetch list of states
  const res = await fetch(`https://sampleapis.com/the-states/api/the-states`)

  const states = await res.json()

  // 2. Loop over each one
  states.forEach(state => {
    // create a node for each state
    const nodeMeta = {
      id: state.id,
      parent: null,
      children: [],
      internal: {
        type: "State",
        mediaType: "application/json",
        contentDigest: createContentDigest(state),
      },
    }

    // 3. Create a node for each state
    actions.createNode({
      ...state,
      nodeMeta,
    })
  })
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
