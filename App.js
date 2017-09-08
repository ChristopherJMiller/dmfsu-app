import React, { Component } from 'react';
import { Navigator, NativeModules, Text } from 'react-native';

import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: '#CEB888',
    },
    toolbar: {
        container: {
            height: 70,
        },
    },
}
export default class App extends React.Component {

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Toolbar
          rightElement="menu"
        />
        
      </ThemeProvider>
    );
  }
}
