import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Events from '../components/Events';
import Navbar from '../partials/Navbar';

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
        <Navbar />
        <ScrollView>
          <Events jsonURL="https://app.dmfsu.org/events.json" />
        </ScrollView>
      </View>
    );
  }
}
