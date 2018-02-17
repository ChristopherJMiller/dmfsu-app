import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';

import FitImage from '../components/FitImage';
import Navbar from '../partials/Navbar';

import Analytics from '../partials/Analytics'

const flexRows = StyleSheet.create({
  rowThirdScreen: {
    flex: 0.3,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:'center'
  },
  rowThirdScreenNoLine: {
    flex: 0.3,
    justifyContent:'center'
  }
});

const textStyles = StyleSheet.create({
  buttons: {
    color: '#ffffffff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 48,
    margin: 'auto'
  }
});

export class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  constructor(props) {
    super(props);
    Analytics("About");
  }

  render() {
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: '#222',
      }}
    >
      <Navbar />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <FitImage
          style={{
            flex: 1,
            resizeMode: 'center',
          }}
          source={require('../assets/photos/aboutbackground.jpg')}
        />
      </View>
      
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center'
        }}
      >
        <View style={flexRows.rowThirdScreen}>
          <Text style={textStyles.buttons} onPress={() => Linking.openURL('https://www.dmfsu.org/children-s-miracle-network').catch(err => console.error('An error occurred', err)) }>Children's Miracle Network</Text>
        </View>
        <View style={flexRows.rowThirdScreen}>
          <Text style={textStyles.buttons} onPress={ () => Linking.openURL('https://www.dmfsu.org/college-of-medicine').catch(err => console.error('An error occurred', err)) }>College of Medicine</Text>
        </View>
        <View style={flexRows.rowThirdScreenNoLine}>
          <Text style={textStyles.buttons} onPress={ () => Linking.openURL('https://dmfsu.org/contact-us').catch(err => console.error('An error occurred', err)) }>Frequently Asked Questions</Text>
        </View>
      </View>
    </View>
    );
  }
}
