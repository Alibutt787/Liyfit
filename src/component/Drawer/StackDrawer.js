import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../Screen/Home';
import CreatePostNav from '../Screen/CreatePostNav';
import BookingHistory from '../Screen/BookingHistory';
import SearchRide from '../Screen/SearchRide';


const Drawer = createDrawerNavigator();

export default function StackDrawer() {
  return (
   
<Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>

<Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} /> 
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />)
        }}
      />
       <Drawer.Screen
      name="Create Ride Post"
      component={CreatePostNav}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="create" size={22} color={color} />
        ),
      }}
    />
      <Drawer.Screen
        name="Search Ride"
        component={SearchRide}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search" size={22} color={color} />
     
          ),
        }}
      /> 
       <Drawer.Screen
      name="Ride History"
      component={BookingHistory}
      options={{
        drawerIcon: ({color}) => (
          <Icon name="clock" size={22} color={color} />
   
        ),
      }}
    />  
     
      </Drawer.Navigator>

  );
}