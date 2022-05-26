
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PassenBookedRide from './PassenBookedRide';
import PassenBookedRideView from './PassenBookedRideView';

const Stack = createNativeStackNavigator();

 const PassengerBookedNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="PassenBookedRide"
          component={PassenBookedRide}
          options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="PassenBookedRideView" component={PassenBookedRideView}  options={{ title: 'Welcome',headerShown: false }}/>
          </Stack.Navigator>
   
  );
};
export default PassengerBookedNav;
