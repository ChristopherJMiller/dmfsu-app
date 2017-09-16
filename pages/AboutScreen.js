import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, About!</Text>
      </View>
    );
  }
}
