//Place code in here for iOS

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Header'} />
    <AlbumList />
  </View>
);  

AppRegistry.registerComponent('albums', () => App);
