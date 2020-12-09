import { graphql } from "gatsby"
import React from "react"

export const query = graphql`
  query User($id: String) {
    allRandomUser(filter: { id: { eq: $id } }) {
      edges {
        node {
          name {
            first
            last
          }
        }
      }
    }
  }
`

const User = props => {
  console.log(props.data.allRandomUser.edges[0])
  const data = props.data.allRandomUser.edges[0]
  return <>Hello {data.node.name.first} {data.node.name.last}</>
}

export default User
