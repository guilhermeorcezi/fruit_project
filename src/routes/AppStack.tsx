import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabStack from './TabStack';

const App = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f0f0f7' },
      }}
      initialRouteName="TabStack"
    >
      <App.Screen name="TabStack" component={TabStack} />
    </App.Navigator>
  );
};

export default AppStack;
