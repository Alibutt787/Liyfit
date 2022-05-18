import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Help from './Help';
import Contact_info_Liyfit from './Contact_info_Liyfit';
import AppInfo from './AppInfo';


const Stack = createNativeStackNavigator();

 const HelpNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Help_content"
          component={Help}
          options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Contact_us" component={Contact_info_Liyfit}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="AppInfo" component={AppInfo}  options={{ title: 'Welcome',headerShown: false }}/>
         
          
          </Stack.Navigator>
   
  );
};
export default HelpNav;
