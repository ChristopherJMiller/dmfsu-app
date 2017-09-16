import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#7F4251',
    flex: 1,
  },
  titleText: {
    color: '#ffffffff',
    fontSize: 32,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  text: {
    color: '#ffffffff'
  }
});
