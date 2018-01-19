import React from 'react';
import { TouchableHighlight, Image, View, Linking } from 'react-native';

export default class SocialMediaIcon extends React.Component {
  render() {
    return (
        <TouchableHighlight style={{width: 50, height: 50}} onPress={() => Linking.openURL(this.props.url).catch(err => console.error('An error occurred', err))} underlayColor="white">
            <Image style={{width: 50, height: 50}} source={this.props.image} />
        </TouchableHighlight>
    );
  }
}
