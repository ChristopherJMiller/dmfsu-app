import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import styles from '../assets/styles'

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch(this.props.jsonURL)
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.events.sort(function(a,b){
          return new Date(a.start_time) - new Date(b.start_time);
        });
        this.setState({events: responseJson.events, isLoading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    var moment = require('moment-timezone');
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20, paddingLeft: 10, paddingRight: 10}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.eventsContainer}>
        {this.state.events != null ? this.state.events.map((r,k) => <View key={k}><Text style={styles.announcementTitle}>{r.title}</Text><Text style={styles.announcementText}>{moment(r.start_time).tz('America/New_York').format("MMM Do h:mm a")} to {moment(r.end_time).tz('America/New_York').format("MMM Do h:mm a")}</Text><Text style={styles.announcementText}>{r.description}</Text></View>) : null }
      </View>
    );
  }
}
