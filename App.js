import 'react-native-gesture-handler';

import React from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './app/config/colors';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ProjectsScreen from './app/screens/ProjectsScreen';
import ProjectInfoScreen from './app/screens/ProjectInfoScreen';
import ActivitiesScreen from './app/screens/ActivitiesScreen';
import FinancesScreen from './app/screens/FinancesScreen';
import StateScreen from './app/screens/StateScreen';
import PartDetailsScreen from './app/screens/PartDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.onBackground,
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Project Info" component={ProjectInfoScreen} />
        <Stack.Screen name="Finances" component={FinancesScreen} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Parts" component={StateScreen} />
        <Stack.Screen name="Part Details" component={PartDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.onBackground,
  }
});
