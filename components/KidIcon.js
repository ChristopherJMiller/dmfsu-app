import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import FitImage from './FitImage';
import Overlay from 'react-native-modal-overlay';

import styles from '../assets/modalStyles';

export default class KidIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this._toggleModal} style={{ alignItems: 'center' }}>
          <Image
              source={this.props.kid.image}
              style={{flex: 1, borderRadius: 100, resizeMode: 'contain' }}
            />
          <Text style={styles.kidNameScreen}>{this.props.kid.name}</Text>
        </TouchableOpacity>
        <Overlay visible={this.state.isModalVisible}
          closeOnTouchOutside animationType="zoomIn"
          containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
          childrenWrapperStyle={{backgroundColor: '#eee'}}
          animationDuration={500}
          onClose={this._toggleModal}>
          <Image
              source={this.props.kid.image}
              style={{alignContent:'center'}}
            />
          <Text style={styles.kidName}>{this.props.kid.name}</Text>
          <Text style={styles.text}>{this.props.kid.description}</Text>
        </Overlay>
      </View>
    );
  }
}