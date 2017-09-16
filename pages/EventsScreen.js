import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello, Events!</Text>
      </View>
    );
  }
}
