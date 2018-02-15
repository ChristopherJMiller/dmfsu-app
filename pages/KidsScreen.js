import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import KidIcon from '../components/KidIcon';
import { Kids } from '../components/Kids'
import Navbar from '../partials/Navbar';

export class KidsScreen extends React.Component {
  static navigationOptions = {
    title: 'Meet The Kids',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList
        data={Kids}
        numColumns={2}
        style={{flex: 1}}
        ListHeaderComponent={ <Navbar /> }
        renderItem={({item, k}) => <KidIcon kid={item} key={k} /> }
        keyExtractor={(item, index) => index}
      />
    );
  }
}
