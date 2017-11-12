import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import styles from '../assets/styles'
import FitImage from '../components/FitImage';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <FitImage
            source={require('../assets/photos/homebackground.png')}
            originalWidth={6016}
            originalHeight={4016}
          />
        <Text style={styles.titleText}>ANNOUNCEMENTS</Text>
      </ScrollView>
    );
  }
}
