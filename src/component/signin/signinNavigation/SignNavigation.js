
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Getstarted/GetStarted';
import LoginNumber from '../Login/LoginNumber';
import Confim from '../confirmCode/Confirmation';
import StackDrawer from '../../Dashboard/Drawer/StackDrawer';
import NameSc from '../NameSc.js/NameSc';
import TermConditions from '../terms/TermConditions.js';
const Stack = createNativeStackNavigator();

export const SignNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="Confirm" component={Confim}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="Number" component={LoginNumber}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="WelcomeHomeScreen" component={StackDrawer}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="NameSc" component={NameSc}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="TermConditions" component={TermConditions}  options={{ title: 'Welcome',headerShown: false }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

