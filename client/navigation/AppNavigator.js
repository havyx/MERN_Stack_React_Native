import React from 'react';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import HomeListScreen from '../screens/HomeListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const aboutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const stackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        options={{title: 'Procurar Moradia'}}
      />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
      <Stack.Screen name="AddHome" component={AddHomeScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={stackNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={aboutStackNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="info" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
