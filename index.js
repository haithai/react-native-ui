// Import a lib to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// http://rallycoding.herokuapp.com/api/music_albums
// Create a component.

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

// Render it to the deivce.
AppRegistry.registerComponent('albums', () => App);
