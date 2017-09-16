import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ConnectScreen extends React.Component {
  static navigationOptions = {
    title: 'Connect',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, ConnectScreen!</Text>
      </View>
    );
  }
}
