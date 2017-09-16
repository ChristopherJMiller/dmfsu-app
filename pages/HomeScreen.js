import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>ANNOUNCEMENTS</Text>
      </View>
    );
  }
}
