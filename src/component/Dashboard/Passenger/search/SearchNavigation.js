import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchRide from './SearchRide';
import ViewSearchPost from './ViewSearchPost';
const Stack = createNativeStackNavigator();

 const SearchNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="SearchRide"
          component={SearchRide}
          options={{ title: 'Welcome',headerShown: false }}/>
          
         <Stack.Screen name="ViewSearchPost" component={ViewSearchPost}  options={{ title: 'Welcome',headerShown: false }}/> 
          </Stack.Navigator>
   
  );
};
export default SearchNavigation;
