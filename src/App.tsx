import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';


import { StackNavigator } from './routes/StackNavigator';

export const App = () => {
  return (
<NavigationContainer>
  <StackNavigator></StackNavigator>
</NavigationContainer>
  )
}
