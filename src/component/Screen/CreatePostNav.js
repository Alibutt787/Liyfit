

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostLogin from './CreatePost/PostLogin'
import PostSignup from './CreatePost/PostSignup'
import PostHome from './CreatePost/PostHome'
import CreatePostForm from './CreatePost/CreatePostForm';
import DriverViewCreatPost from './CreatePost/card/DriverViewCreatPost';
const Stack = createNativeStackNavigator();

 const CreatPostNav = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="PostSignup"
          component={PostSignup}
          options={{ title: 'Welcome',headerShown: false }}/>
          
          <Stack.Screen name="PostSignin" component={PostLogin}  options={{ title: 'Welcome',headerShown: false }}/>
          <Stack.Screen name="PostHome" component={PostHome}  options={{ title: 'Creat Post',headerShown: false }}/>
          <Stack.Screen name="CreatePostForm" component={ CreatePostForm}  options={{ title: 'Ride Post',headerShown: false }}/>
          <Stack.Screen name="DriverViewCreatPost" component={DriverViewCreatPost}  options={{ title: 'Ride Post',headerShown: false }}/>
         </Stack.Navigator>
   
  );
};
export default CreatPostNav;
