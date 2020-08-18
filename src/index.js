import React from 'react';
import { Dimensions } from 'react-native';
import {createDrawerNavigator } from 'react-navigation';

import SplashScreen from 'react-native-splash-screen'
import DrawerSettings from './components/navigations/DrawerSettings';
import BottomTabStack from './components/navigations/BottomStack';
import SigninScreen from './screen/auth/login';
import SignUpScreen from './screen/auth/signup';
import SearchScreen from './screen/search/search';
import { MenuProvider } from 'react-native-popup-menu';
import CreateEventScreen from './screen/broadcast/createEvent';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainRoot = createDrawerNavigator(
  {
    Login: SigninScreen,
    SignUp: SignUpScreen,
    Search: SearchScreen,
    CreateEvent: CreateEventScreen,
    Main: BottomTabStack,
  },
  {
      initialRouteName: 'Main',
      backBehavior: true,
      contentOptions: {
          activeTintColor: '#548ff7',
          activeBackgroundColor: 'transparent',
          inactiveTintColor: '#ffffff',
          inactiveBackgroundColor: 'transparent',
          labelStyle: {
              fontSize: 15,
              marginLeft: 0,
          },
      },
      drawerWidth: SCREEN_WIDTH,
      drawerPosition: 'right',
      contentComponent: DrawerSettings,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
  }
);

class AppContainer extends React.Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
      return (
        <MenuProvider>
          <MainRoot ref={nav => this.navigator = nav}/>
        </MenuProvider>
      );
  }
}

export default AppContainer;