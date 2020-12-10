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