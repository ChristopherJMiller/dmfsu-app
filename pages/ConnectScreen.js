import React, { Component } from 'react';
import { Text, View, Linking, Image } from 'react-native';
import styles from '../assets/styles'
import { StyleSheet } from 'react-native';

import SocialMediaIcon from '../components/SocialMediaIcon'
import Navbar from '../partials/Navbar';


const flexRows = StyleSheet.create({
  rowContainers: {
    flex: 1
  },
  rowFifthScreen: {
    flex: 0.2,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent:'center'
  },
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
  },
  titles: {
    color: '#ffffffff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: '100',
    textAlign: 'center',
  }
});

export class ConnectScreen extends React.Component {
  static navigationOptions = {
    title: 'Connect',
  };

  constructor(props) {
    super(props);
    this.onPress = () => {

    };
  }

  render() {
    return (
      <View style={flexRows.rowContainers}>
        <Navbar />
        <View style={flexRows.rowContainers}>
          <View style={flexRows.rowFifthScreen}>
            <Text style={textStyles.buttons} onPress={() => Linking.openURL('https://dmfsu.org').catch(err => console.error('An error occurred', err)) }>Website</Text>
          </View>
          <View style={flexRows.rowFifthScreen}>
            <Text style={textStyles.buttons} onPress={ () => Linking.openURL('https://dmfsu.org/contact-us').catch(err => console.error('An error occurred', err)) }>Meet the Team</Text>
          </View>
          <View style={flexRows.rowThirdScreen}>
            <Text style={textStyles.titles} onPress={this.onPress}>Check Donations</Text>
            <Text style={textStyles.text}>Children's Miracle Network</Text>
            <Text style={textStyles.text}>PO Box 14205</Text>
            <Text style={textStyles.text}>Make sure to reference in the Memo of</Text>
            <Text style={textStyles.text}>the Check "Dancer Name - Team Name"</Text>
          </View>
          <View style={flexRows.rowThirdScreenNoLine}>
            <Text style={textStyles.titles}>Social Media</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <SocialMediaIcon url='https://www.facebook.com/dmfsu/' image={require('../assets/photos/icons/facebookicon.png')} />
              <SocialMediaIcon url='https://twitter.com/dm_fsu' image={require('../assets/photos/icons/twittericon.png')} />
              <SocialMediaIcon url='https://www.instagram.com/dmfsu/' image={require('../assets/photos/icons/instagramicon.png')} />
              <SocialMediaIcon url='http://dmatfsu.tumblr.com/' image={require('../assets/photos/icons/tumblricon.png')} />
              <SocialMediaIcon url='https://www.youtube.com/user/DMatFSU' image={require('../assets/photos/icons/youtubeicon.png')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
