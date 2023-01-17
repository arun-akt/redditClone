/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
const Stack = createNativeStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}>
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: 'Login',
          headerBackVisible: false,
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#0a2f5c'}}}
          component={LoginScreen}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: 'Home',
          headerBackVisible: false,
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#0a2f5c'}}}
          component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
