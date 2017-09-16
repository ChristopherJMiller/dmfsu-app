import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
      </View>
    );
  }
}
