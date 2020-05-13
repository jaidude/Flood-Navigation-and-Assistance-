import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home'
import Maps from './screens/Maps'
import Graph from './screens/Graph'
import About from './screens/About'

import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HOME"
      tabBarOptions={{
        activeTintColor: "#65D78B"
      }}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="MAPS"
        component={Maps}
        options={{
          tabBarLabel: 'MAPS',
          tabBarIcon: ({ color, size }) => (
            <Icon name='map' color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="GRAPH"
        component={Graph}
        options={{
          tabBarLabel: 'GRAPH',
          tabBarIcon: ({ color, size }) => (
            <Icon name='area-chart' color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="TEAM"
        component={About}
        options={{
          tabBarLabel: 'TEAM',
          tabBarIcon: ({ color, size }) => (
            <Icon name='users' color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    <NavigationContainer style={styles.eachTabContainer}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachTabContainer: {
    flex: 1,
    paddingBottom: 100,
  }
});
