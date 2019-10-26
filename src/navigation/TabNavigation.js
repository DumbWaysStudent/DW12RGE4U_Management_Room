/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Room from '../screen/Room';
import Customer from '../screen/Customer';
import Settings from '../screen/Settings';
import Checkin from '../screen/Checkin';

export default createMaterialBottomTabNavigator({
  Checkin: { 
    screen: Checkin,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Checkin</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='th-large' size={26} color={tintColor} />
      )
    }
   },
   Room: { 
    screen: Room,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Room</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='bed' size={26} color={tintColor} />
      )
    }
   },
  Customer: { 
    screen: Customer,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Customer</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='address-book' size={26} color={tintColor} />
      )
    }
   },
  Settings: { 
    screen: Settings,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Settings</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' size={26} color={tintColor} />
      )
    }
   }
},
{
  initialRouteName: 'Room',
  activeColor: '#fb9224',
  inactiveColor: 'silver',
  barStyle: { backgroundColor: '#ffffff', paddingBottom: 5, },
});
