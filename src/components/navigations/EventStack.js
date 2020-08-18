
import { createStackNavigator } from 'react-navigation';
import EventListScreen from '../../screen/event/eventList';
import EventDetailScreen from '../../screen/event/eventDetail';

const EventStack = createStackNavigator({
  EventList: EventListScreen,
  EventDetail: EventDetailScreen,
}, {
  navigationOptions: ({ navigation }) => ({
      initialRouteName: 'EventList',
  })
});

export default EventStack;

