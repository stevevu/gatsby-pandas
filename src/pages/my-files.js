import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function MyFiles({ data }) {
  // console.log(data);
  return (
    <Layout>
      <h1>My Site's src/ files</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Public URL</th>
          <th>ModifiedTime</th>
          </tr>
          { data.allFile.edges.map( ( { node }, index) => (
            <tr key={index}>
              <td>{node.id}</td>
              <td>{node.base}</td>
              <td>{node.publicURL}</td>
              <td>{node.modifiedTime}</td>
            </tr>
          )
          )}
      </table>
    </Layout>
  )
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        id
        base
        publicURL
        modifiedTime
      }
    }
  }
}
`