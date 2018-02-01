import React, { Component } from 'react';

import { Toolbar } from 'react-native-material-ui';

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toolbar
        rightElement="menu"
        onLeftElementPress={() => this.props.navigation.navigate('DrawerToggle')}
      />
    );
  }
}
