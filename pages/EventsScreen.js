import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Events from '../components/Events';

export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Events jsonURL="https://app.dmfsu.org/events.json" />
      </ScrollView>
    );
  }
}
