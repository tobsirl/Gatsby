import { Link } from "gatsby"
import { node } from "prop-types"
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
    <Link to={`/page-2`}>States</Link>
    {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    <ul>
      {data.allRandomUser.edges.map(({ node }) => (
        <Link to={`users/${node.id}`} key={node.id}>
          <li>
            <img src={node.picture.thumbnail} alt={node.name.first} />
            {node.name.first} {node.name.last}
          </li>
        </Link>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
