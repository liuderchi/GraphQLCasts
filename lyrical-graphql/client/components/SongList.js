import React, { Component } from 'react'
import gql from 'graphql-tag'

class Songlist extends Component {
  render() {
    return (
      <div>Songlist</div>
    )
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default Songlist
