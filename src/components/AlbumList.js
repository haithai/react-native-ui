import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
import Card from './Card'

type Props = {}

class AlbumList extends Component<Props> {
  state = { albums: [] }

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(res => {
      this.setState({ albums: res.data })
    })
  }

  renderAlbums() {
    const { albums } = this.state
    return albums.map(album => (
      <Card key={album.title}>
        <AlbumDetail album={album} />
      </Card>
    ))
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>
  }
}

export default AlbumList
