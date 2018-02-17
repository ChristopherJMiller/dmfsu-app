import React, { Component } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import styles from '../assets/styles'
import FitImage from '../components/FitImage';
import Announcements from '../components/Announcements';
import Navbar from '../partials/Navbar';

import Analytics from '../partials/Analytics'


export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    Analytics("Home");
  }

  render() {
    return (
      <View>
        <Navbar />
        <ScrollView>
          <FitImage
              source={require('../assets/photos/homebackground.png')}
              originalWidth={6016}
              originalHeight={4016}
            />
          <Text style={styles.titleText}>ANNOUNCEMENTS</Text>
          <Announcements jsonURL="https://app.dmfsu.org/announcements.json" />
        </ScrollView>
      </View>
    );
  }
}
