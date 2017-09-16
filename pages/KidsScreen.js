import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class KidsScreen extends React.Component {
  static navigationOptions = {
    title: 'Meet The Kids',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, Kids!</Text>
      </View>
    );
  }
}
