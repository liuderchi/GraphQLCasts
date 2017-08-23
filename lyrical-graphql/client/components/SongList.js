import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Songlist extends Component {
  render() {
    console.log(this.props.data.loading, this.props.data.songs)

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

export default graphql(query)(Songlist)
