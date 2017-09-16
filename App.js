
import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-material-ui';
import { DrawerNavigator } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { HomeScreen } from './pages/HomeScreen';

import { Navbar } from './partials/Navbar';


const MainScreenNavigator = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    drawerPosition: 'right'
  }
);

const uiTheme = {
    palette: {
        primaryColor: '#CEB888',
    },
    toolbar: {
        container: {
            height: 40,
        },
    },
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    flex: 1,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <Navbar />
          <MainScreenNavigator />
        </View>
      </ThemeProvider>
    );
  }
}
