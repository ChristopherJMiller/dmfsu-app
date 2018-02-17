import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Navbar from '../partials/Navbar';

import Analytics from '../partials/Analytics'

export class DonateScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
  };

  constructor(props) {
    super(props);
    Analytics("Donate");
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar />
        <WebView
          source={{uri: 'https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.donate&eventID=1595'}}
        />
      </View>
    );
  }
}
