import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles'
import { StyleSheet } from 'react-native';


const flexRows = StyleSheet.create({
  rowContainers: {
    flex: 1
  },
  rowFifthScreen: {
    flex: 0.2
  },
  rowThirdScreen: {
    flex: 0.3
  },
});

const textStyles = StyleSheet.create({
  buttons: {
    color: '#ffffffff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 48
  },
  titles: {
    color: '#ffffffff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
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
        <View style={flexRows.rowFifthScreen}>
          <Text style={textStyles.buttons} onPress={this.onPress}>Website</Text>
        </View>
        <View style={flexRows.rowFifthScreen}>
          <Text style={textStyles.buttons} onPress={this.onPress}>Meet the Team</Text>
        </View>
        <View style={flexRows.rowThirdScreen}>
          <Text style={textStyles.titles} onPress={this.onPress}>Check Donations</Text>
          <Text style={textStyles.text}>Children's Miracle Network</Text>
          <Text style={textStyles.text}>PO Box 14205</Text>
          <Text style={textStyles.text}>Make sure to reference in the Memo of</Text>
          <Text style={textStyles.text}>the Check "Dancer Name - Team Name"</Text>
        </View>
        <View style={flexRows.rowThirdScreen}>
          <Text style={textStyles.titles}>Social Media</Text>
        </View>
      </View>
    );
  }
}
