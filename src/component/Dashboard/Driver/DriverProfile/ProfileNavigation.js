import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import ViewProfilePhoto from './ViewProfilePhoto';
const Stack = createNativeStackNavigator();

 const DriverProfileNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={{ title: 'Welcome',headerShown: false }}/>
          
          <Stack.Screen name="ViewProfilePhotoScreen" component={ViewProfilePhoto}  options={{ title: 'Welcome',headerShown: false }}/>
          </Stack.Navigator>
   
  );
};
export default DriverProfileNavigation;
