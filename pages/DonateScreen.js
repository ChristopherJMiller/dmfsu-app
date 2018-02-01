import React, { Component } from 'react';
import { WebView } from 'react-native';

export class DonateScreen extends React.Component {
  static navigationOptions = {
    title: 'Donate',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.donate&eventID=1595'}}
      />
    );
  }
}
