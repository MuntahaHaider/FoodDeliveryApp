import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderHistory from '../screens/OrderHistory';
import Account from '../screens/Account';
import AllCategory from '../screens/AllCategory';

const Tab = createBottomTabNavigator();

const Tab_Navigation = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"  
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
          backgroundColor: 'rgb(10, 12, 32)',
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 14, 
          // fontWeight: 'bold',
        },
          
        }}
      >
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            title: '🏠︎Home',
            tabBarIcon: () => <Icon name="account" size={30} color="black" />,
            
          }}
        />
        <Tab.Screen
          name="🍔AlCategory"
          component={AllCategory}
          options={{
            tabBarIcon: () => <Icons name="MaterialCommunityIcons" size={30} color="black" />,
          }}
        />
        <Tab.Screen
          name="🛒Your Order"
          component={OrderHistory}
          options={{
            tabBarIcon: () => <Icons name="MaterialCommunityIcons" size={30} color="black" />,
          }}
        />
        <Tab.Screen
          name="👤Account"
          component={Account}
          options={{
            tabBarIcon: () => <Icon name="account" size={30} color="black" />,
          }}
        />
      </Tab.Navigator>
  );
};

export default Tab_Navigation;

const styles = StyleSheet.create({});

