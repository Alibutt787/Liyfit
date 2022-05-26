
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookedRideView from './BookiedRideView';
import DriverBookingHistory from './DriverBookingHistory';

const Stack = createNativeStackNavigator();

 const BookedRideNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="DriverBookingHistory"
          component={DriverBookingHistory}
          options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="BookedRideView" component={BookedRideView}  options={{ title: 'Welcome',headerShown: false }}/>
          </Stack.Navigator>
   
  );
};
export default BookedRideNavigation;
