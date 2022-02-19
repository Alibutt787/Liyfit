
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../component/signin/GetStarted';
import LoginNumber from '../component/signin/LoginNumber';
import Confim from '../component/signin/Confirmation';
import StackDrawer from '../component/Drawer/StackDrawer';
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
        <Stack.Screen name="HomeScreenDrawer" component={StackDrawer}  options={{ title: 'Welcome',headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

