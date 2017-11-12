import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles'
import FitImage from '../components/FitImage';


export class FundraisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Fundraising',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FitImage
            source={require('../assets/photos/fundraisingbackground.png')}
            originalWidth={1784}
            originalHeight={2162}
          />
      </View>
    );
  }
}
