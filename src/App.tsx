
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';


//import { StackNavigator } from './routes/StackNavigator';
import { SideMenuNavigator } from './routes/SideMenuNavigator';
//import { BottonTapNavigator } from './routes/BottonTapNavigator';

export const App = () => {
  return (
<NavigationContainer>
  {/*<StackNavigator></StackNavigator>*/}   
  <SideMenuNavigator></SideMenuNavigator>
  {/*<BottonTapNavigator/>;*/}
</NavigationContainer>
  )
}
