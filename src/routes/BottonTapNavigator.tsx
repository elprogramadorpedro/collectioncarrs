import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/tabs/TabOneScreen';
import { TabTwoScreen } from '../screens/tabs/TabTwoScreen';
import { TabThreeScreen } from '../screens/tabs/TabThreeScreen';
import { TabForScreen } from '../screens/tabs/TabForScreen';
import { TabFiveScreen } from '../screens/tabs/TabFiveScreen';

const Tab = createBottomTabNavigator();


export const BottonTapNavigator = () => {

    return (
        <Tab.Navigator>
          <Tab.Screen name="Tap1" component={TabOneScreen} />
          <Tab.Screen name="Tap2" component={TabTwoScreen} />
          <Tab.Screen name="Tap3" component={TabThreeScreen} />
          <Tab.Screen name="Tap4" component={TabForScreen} />
       
        </Tab.Navigator>
      );
}
