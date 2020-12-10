import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query States {
    allState {
      edges {
        node {
          name
          population
          capital
          flag
          id
        }
      }
    }
  }
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    {data.allState.edges.map(state => (
      <div>
        {state.node.name}
        <img src={state.node.flag} alt={state.name} />
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
