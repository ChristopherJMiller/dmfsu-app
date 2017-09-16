import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class FundraisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Fundraising',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, FundraisingScreen!</Text>
      </View>
    );
  }
}
