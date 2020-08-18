import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Icon, colors } from '../../common/constants';
import EventStack from './EventStack';
import FavoritesStack from './FavoritesStack';
import MyEventsStack from './MyEventStack';
import BroadCastStack from './BroadcastStack';

const BottomTabStack = createBottomTabNavigator({
  'View Events': EventStack,
  'Favorites': FavoritesStack,
  'My Events': MyEventsStack,
  'BroadCast': BroadCastStack
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      let colorName;
      switch  (routeName) {
        case 'View Events':
          iconName = focused? "view-events-active": "view-events";
          colorName = focused? colors.primary: colors.gray;
          break;
        case 'Favorites':
          iconName = focused? "favorites-active": "favorites";
          colorName = focused? colors.primary: colors.gray;
          break;
        case 'My Events':
          iconName = focused? "my-events-active":"my-events";
          colorName = focused? colors.primary: colors.gray;
          break;
        case 'BroadCast':
          iconName = focused? "broadcast-active":"broadcast";
          colorName = focused? colors.primary: colors.gray;
          break;
      }
      return <Icon size ={25} name={iconName} color={colorName}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.gray,
    labelStyle: {
      fontSize: 15,
      paddingBottom: 5
    },
    style: {
      paddingTop: 10,
      height: 60,
    },
    showIcon: true
  },
  swipeEnabled: true,
});

export default BottomTabStack;