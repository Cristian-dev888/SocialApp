import { createStackNavigator } from 'react-navigation';
import MyEventScreen from '../../screen/myEvent/myEvent';

const MyEventsStack = createStackNavigator({
  MyEventList: MyEventScreen,
}, {
  navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MyEventList',
  })
});

export default MyEventsStack;