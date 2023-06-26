import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/** 
handle HomeStackType naviagtion types 
*/

export type HomeStackType = {
  Home: undefined;
  MissionDetails: { data: any };
};
/** 
handle RootStackType naviagtion types 
*/
export type RootStackType = {
  HomeStack: NavigatorScreenParams<HomeStackType>;
  LaunchMap: undefined;
};


export type RootStackNavigatorProps = BottomTabNavigationProp<RootStackType>;

export type HomeStackNavigationProps = NativeStackNavigationProp<HomeStackType>;
