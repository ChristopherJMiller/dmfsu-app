import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import styles from '../assets/styles'

String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };

export default class FitImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch(this.props.jsonURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({announcements: responseJson.announcements, isLoading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.announcementsContainer}>
        {this.state.announcements != null ? this.state.announcements.map(r => <View><Text style={styles.announcementTitle}>{r.title}</Text><Text style={styles.annoucnementAuthor}>by {r.author}</Text><Text style={styles.text}>{r.post.trunc(75)}</Text></View>) : null }
      </View>
    );
  }
}
