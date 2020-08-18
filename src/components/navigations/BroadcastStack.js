
import { createStackNavigator } from 'react-navigation';
import BroadCastScreen from '../../screen/broadcast/broadcast';

const BroadCastStack = createStackNavigator({
  BroadCast: BroadCastScreen,
}, {
  navigationOptions: ({ navigation }) => ({
      initialRouteName: 'BroadCast',
  })
});

export default BroadCastStack;