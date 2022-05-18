import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from './Setting';
import ProfileNavigation from './profile/ProfileNavigation';
import AccountNav from './Account/AccountNav';
import HelpNav from './Help/HelpNav';
const Stack = createNativeStackNavigator();

 const SettingNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Setting_Content"
          component={Setting}
          options={{ title: 'Welcome',headerShown: false }}/>
          
          <Stack.Screen name="ProfileNavigation" component={ProfileNavigation}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="AccountSetting" component={AccountNav}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="HelpSetting" component={HelpNav}  options={{ title: 'Welcome',headerShown: false }}/>
         
          </Stack.Navigator>
   
  );
};
export default SettingNav;
