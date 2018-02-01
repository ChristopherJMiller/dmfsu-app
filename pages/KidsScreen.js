import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import KidIcon from '../components/KidIcon';
import { Kids } from '../components/Kids'

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
        renderItem={({item, k}) => <KidIcon kid={item} /> }
      />
    );
  }
}
