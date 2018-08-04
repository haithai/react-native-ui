import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
import Card from './Card'

type Props = {}

class AlbumList extends Component<Props> {
  state = { albums: [] }

  componentWillMount() {
    console.log('componentWillMount in AlbumList')
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(res => {
      this.setState({ albums: res.data })
    })
  }

  renderAlbums() {
    const { albums } = this.state
    return albums.map(album => (
      <Card>
        <AlbumDetail album={album} />
      </Card>
    ))
  }

  render() {
    return <View>{this.renderAlbums()}</View>
  }
}

export default AlbumList
