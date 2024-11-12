
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Tab_Navigation from './Tab_Navigation';
import OrderForm from '../screens/OrderForm';
import OrderHistory from '../screens/OrderHistory';

const Stack_Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="home" component={Home}  />
        <Stack.Screen name="dashboard" component={Tab_Navigation}  />
        <Stack.Screen name="orderform" component={OrderForm}  />
        <Stack.Screen name="orderhistory" component={OrderHistory}  />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;

const styles = StyleSheet.create({});
