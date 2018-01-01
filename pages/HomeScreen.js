import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import styles from '../assets/styles'
import FitImage from '../components/FitImage';
import Announcements from '../components/Announcements';


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
            source={require('../assets/photos/homebackground.jpg')}
            originalWidth={6016}
            originalHeight={4016}
          />
        <Text style={styles.titleText}>ANNOUNCEMENTS</Text>
        <Announcements jsonURL="http://192.168.1.18:3000/announcements.json" />
      </ScrollView>
    );
  }
}
