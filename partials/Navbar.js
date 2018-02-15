import React, { Component } from 'react';

import { Toolbar } from 'react-native-material-ui';

import { withNavigation , NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'DrawerOpen'
});


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.navigation)
    return (
      <Toolbar
        rightElement="menu"
        onRightElementPress={() => this.props.navigation.dispatch(navigateAction)}
      />
    );
  }
}

export default withNavigation(Navbar)