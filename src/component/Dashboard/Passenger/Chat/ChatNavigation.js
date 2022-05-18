
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from './ChatList';
import Chat from './Chat';
const Stack = createNativeStackNavigator();

export default function ChatNav() {

  

return (
  
     <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatList}  options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="ChatScreen" component={Chat}  options={{ title: 'Welcome',headerShown: false }}/>
         </Stack.Navigator> 
         
  );
};

