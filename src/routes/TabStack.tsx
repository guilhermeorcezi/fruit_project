import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Benefits';
import Benefits from '../pages/Home';
import Recipes from '../pages/Recipes';
import TypesOf from '../pages/TypesOf';

const { Navigator, Screen } = createBottomTabNavigator();

const TabStack: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 23,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? '#D73535' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Benefits"
        component={Benefits}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="thumbs-up"
                size={size}
                color={focused ? '#D73535' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="book-open"
                size={size}
                color={focused ? '#D73535' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="TypesOf"
        component={TypesOf}
        options={{
          tabBarLabel: 'TypesOf',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <IconIonicons
                name="logo-apple"
                size={size}
                color={focused ? '#D73535' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default TabStack;
