import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Getstarted/GetStarted';
import {LoginNumber} from '../Login/LoginNumber';
import Confim from '../confirmCode/Confirmation';
const Stack = createNativeStackNavigator();

export const SignNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="Number" component={LoginNumber}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="confirm" component={Confim}  options={{ title: 'Welcome',headerShown: false }}/>
       
        </Stack.Navigator>
    </NavigationContainer>
  );
};

