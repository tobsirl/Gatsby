import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query Users {
    allRandomUser {
      edges {
        node {
          id
          name {
            first
            last
          }
          picture {
            thumbnail
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Random People</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    <ul>
      {data.allRandomUser.edges.map(({ node }) => (
        <div key={node.id}>
          <li >{node.name.first}</li>
          <img src={node.picture.thumbnail} alt={node.name.first} />
        </div>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
