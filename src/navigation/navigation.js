import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login/login';
import BottomTabNavigator from './bottomtab/bottomTabNavigator';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, gestureEnabled: false }} ></Stack.Screen>
            <Stack.Screen name="Index" component={BottomTabNavigator} options={{ headerShown: false, gestureEnabled: false }} ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
      <NavigationContainer>
        <ScreenNavigator />
      </NavigationContainer>
    );
  }
