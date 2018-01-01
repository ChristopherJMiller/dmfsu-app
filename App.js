
import React, { Component } from 'react';

import { ThemeProvider } from 'react-native-material-ui';
import { DrawerNavigator } from 'react-navigation';
import { View } from 'react-native';

import { HomeScreen } from './pages/HomeScreen';
import { KidsScreen } from './pages/KidsScreen';
import { EventsScreen } from './pages/EventsScreen';
import { FundraisingScreen } from './pages/FundraisingScreen';
import { AboutScreen } from './pages/AboutScreen';
import { ConnectScreen } from './pages/ConnectScreen';

import { Navbar } from './partials/Navbar';

import styles from './assets/styles'


const MainScreenNavigator = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    KidsScreen: { screen: KidsScreen },
    EventsScreen: { screen: EventsScreen },
    FundraisingScreen: { screen: FundraisingScreen },
    AboutScreen: { screen: AboutScreen },
    ConnectScreen: { screen: ConnectScreen }
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

const uiTheme = {
    palette: {
        primaryColor: '#CEB888',
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

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
