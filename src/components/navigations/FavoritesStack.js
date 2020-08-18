import { createStackNavigator } from 'react-navigation';
import FavoriteListScreen from '../../screen/favorites/favoriteList';

const FavoritesStack = createStackNavigator({
  FavoriteList: FavoriteListScreen,
}, {
  navigationOptions: ({ navigation }) => ({
      initialRouteName: 'FavoriteList',
  })
});

export default FavoritesStack;