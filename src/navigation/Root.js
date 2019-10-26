import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './../screen/Login';
import TabNavigation from '../navigation/TabNavigation';

import Splash from '../screen/splashScreen';


const Root = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
  Home: {
    screen: TabNavigation,
    navigationOptions: () => ({
      header: null
    }),
  },

}, { initialRouteName: 'Splash' });

export default createAppContainer(Root);
