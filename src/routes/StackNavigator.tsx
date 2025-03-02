import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { ProductsScreen } from '../screens/Products/ProductsScreen';
import { SettingScreen } from '../screens/settings/SettingScreen';

const Stack = createStackNavigator();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}