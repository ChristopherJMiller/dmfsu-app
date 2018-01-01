import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#7F4251',
    flex: 1,
  },
  announcementsContainer: {
    paddingLeft: 5,
    paddingRight: 5
  },
  titleText: {
    color: '#ffffffff',
    fontSize: 32,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: 5
  },
  announcementTitle: {
    color: '#ffffffff',
    fontSize: 24
  },
  announcementAuthor: {
    color: '#eee',
    fontSize: 8
  },
  text: {
    color: '#ffffffff'
  }
});
