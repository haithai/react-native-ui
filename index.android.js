// index.android.js - place code in here fore Android flatform !!!

// Import a lib to help create a component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component.
const App = () => (
  <Text>
    Some Text
  </Text>
);

// Render it to the deivce.
AppRegistry.registerComponent('albums', () => App);
