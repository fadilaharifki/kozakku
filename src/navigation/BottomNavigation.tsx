/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/Transaction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './AppNavigator';
import HistoryScreen from '../screens/History';

export type BottomTabParamList = {
  HomeTab: undefined;
  TransactionScreen: undefined;
  Profile: undefined;
  HistoryScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type BottomNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BottomNavigation'
>;

const BottomNavigation = () => {
  const navigation = useNavigation<BottomNavigationProp>();

  return (
    <Tab.Navigator
      initialRouteName="TransactionScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#a178f1',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{name: 'HomeScreen'}],
            });
          },
        })}
      />
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
