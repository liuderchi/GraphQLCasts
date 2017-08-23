import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Songlist extends Component {
  render() {
    if (this.props.data.loading) { return (<div>Loading...</div>) }

    return (
      <div>
        {
          this.props.data.songs.map(song => (
            <li>{song.title}</li>
          ))
        }
      </div>
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
