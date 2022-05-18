import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostHome from '../../CreatedPost/DriverPostHome';
import DriverViewCreatPost from './DriverViewCreatPost';
import AttractPeople from '../AttractPeople/AttractPeople';
const Stack = createNativeStackNavigator();

 const CreatedPostNavn = () => {
  return (
      <Stack.Navigator>
       <Stack.Screen name="PostHome" component={PostHome}  options={{ title: 'Creat Post',headerShown: false }}/>
       <Stack.Screen name="DriverViewCreatPost" component={DriverViewCreatPost}  options={{ title: 'Ride Post',headerShown: false }}/>
       <Stack.Screen name="AttractPeople" component={AttractPeople}  options={{ title: 'Ride Post',headerShown: false }}/>
         </Stack.Navigator>
   );
};
export default CreatedPostNav;
