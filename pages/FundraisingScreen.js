import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking, Button } from 'react-native';
import styles from '../assets/styles'
import modalStyles from '../assets/modalStyles'
import FitImage from '../components/FitImage';
import Overlay from 'react-native-modal-overlay';
import Navbar from '../partials/Navbar';


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

export class FundraisingScreen extends React.Component {
  static navigationOptions = {
    title: 'Fundraising',
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })
  
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
            source={require('../assets/photos/fundraisingbackground.jpg')}
          />
        </View>
        
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'center',
              flexDirection: 'row',
              borderBottomColor: '#fff',
              borderBottomWidth: StyleSheet.hairlineWidth,
              justifyContent:'center'
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                borderRightColor: '#fff',
                borderRightWidth: StyleSheet.hairlineWidth,
                justifyContent:'center'
              }}
            >
              <Text style={textStyles.buttons} onPress={() => Linking.openURL('https://dmfsu.org').catch(err => console.error('An error occurred', err)) }>Stats & Info</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                justifyContent:'center'
              }}
            >
              <Text style={textStyles.buttons} onPress={this._toggleModal}>Templates</Text>
            </View>
          </View>  

          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent:'center'
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                borderRightColor: '#fff',
                borderRightWidth: StyleSheet.hairlineWidth,
                justifyContent:'center'
              }}
            >
              <Text style={textStyles.buttons} onPress={() => Linking.openURL('https://dmfsu.org').catch(err => console.error('An error occurred', err)) }>Ideas</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                justifyContent:'center'
              }}
            >
              <Text style={textStyles.buttons} onPress={() => Linking.openURL('https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.login&loginRequired=true&destination=portal.fundraisingPage').catch(err => console.error('An error occurred', err)) }>Donor Drive</Text>
            </View>
          </View>  
        </View>
        <Overlay visible={this.state.isModalVisible}
            closeOnTouchOutside animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
            childrenWrapperStyle={{backgroundColor: '#fff'}}
            animationDuration={500}
            onClose={this._toggleModal}>
            <Text style={modalStyles.kidName}>Choose A Template</Text>
            <View style={{marginTop: 20, marginBottom: 20 }}>
              <Button
                onPress={() => Linking.openURL('mailto:?&subject=Dance%20Marathon%20FSU&body=Hello%20There!').catch(err => console.error('An error occurred', err)) }
                title="Email Template"
                color="rgba(233, 218, 191, 1)"
                accessibilityLabel="Open an Email Template"
              />
            </View>
            <Button
              onPress={() => Linking.openURL('sms:?body=DM%20FSU').catch(err => console.error('An error occurred', err)) }
              title="Text Message Template"
              color="rgba(233, 218, 191, 1)"
              accessibilityLabel="Open a SMS Template"
            />
          </Overlay>
      </View>
    );
  }
}
