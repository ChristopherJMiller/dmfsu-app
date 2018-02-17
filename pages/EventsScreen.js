import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Events from '../components/Events';
import Navbar from '../partials/Navbar';

import Analytics from '../partials/Analytics'

export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  constructor(props) {
    super(props);
    Analytics("Events");
  }

  render() {
    return (
      <View>
        <Navbar />
        <ScrollView>
          <Events jsonURL="https://app.dmfsu.org/events.json" />
        </ScrollView>
      </View>
    );
  }
}
