import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { screenName } from '@src/constants/screen';
import Home from '@src/screens/main/Home';
import LaunchMap from '@src/screens/main/LaunchMap';
import { HomeStackType, RootStackType } from '@src/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MissionDetails from '@src/screens/main/MissionDetails';

const Tab = createBottomTabNavigator<RootStackType>();
const HomeStack = createNativeStackNavigator<HomeStackType>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MissionDetails"
        component={MissionDetails}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ ...props }) => <AntDesign name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={screenName.launchMap.name}
        component={LaunchMap}
        options={{
          title: screenName.launchMap.tabTitle,
          tabBarIcon: ({ ...props }) => (
            <EvilIcons name="location" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return <TabNavigator />
};
export default MainNavigator;
