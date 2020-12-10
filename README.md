# Gatsby [Link](https://www.gatsbyjs.com/)
Collection of Gatsby projects

## Sourcing data from an external API
Using external apis in Gatsby using sourceNodes https://www.gatsbyjs.com/docs/recipes/sourcing-data/

```js
exports.sourceNodes = async params => {
  // fetch a list of states and source them into gatsby API
  await Promise.all([fetchStates(params)]) // Add additional apis
}
```

Create fetchStates

1. Fetch list of states
2. Loop through each one
3. Create a node for each state

```js
const fetchStates = async ({ actions, createContentDigest }) => {
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

    // 3. create a node for that state
    actions.createNode({
      ...state,
      ...nodeMeta,
    })
  })
}
```
You can use `createNodeId()` to create an id if the api doesn't have one