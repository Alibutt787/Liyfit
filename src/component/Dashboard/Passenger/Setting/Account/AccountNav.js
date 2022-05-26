import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './Account';
import ChangeNumber from './changeNumber';

const Stack = createNativeStackNavigator();

 const AccountNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="Account_content"
          component={Account}
          options={{ title: 'Welcome',headerShown: false }}/>
          
          <Stack.Screen name="ChangeNumber" component={ChangeNumber}  options={{ title: 'Welcome',headerShown: false }}/>
        
          </Stack.Navigator>
   
  );
};
export default AccountNav;
