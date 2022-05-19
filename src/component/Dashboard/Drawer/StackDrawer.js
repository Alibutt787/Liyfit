import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Drawer/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Welcome/Home';
import SearchNavigation from '../Passenger/search/SearchNavigation';
import BookedRide from '../Passenger/BookedRide/BookedRide';
import SettingNav from '../Passenger/Setting/SettingNav';
import ChatNav from '../Passenger/Chat/ChatNavigation';
import OnlineRegistrationNav from '../Driver/online registration/OnlinegistrationNav';
import AttractPeople from '../Driver/AttractPeople/AttractPeople';
import DriverPostHome from '../Driver/ViewDriverPost/DriverPostHome';
import DriverBookingHistory from '../Driver/DriverBookingHistory/DriverBookingHistory';
import DriverProfileNavigation from '../Driver/DriverProfile/ProfileNavigation';

const Drawer = createDrawerNavigator();
export default function StackDrawer() {
  const hy = useState(false);
  const [DriverRegistration,setDriverRegistration] = useState(false);
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} hy={hy} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -18,
        margin: 2,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}
    >
      
        {hy[0] ?
   
<Drawer.Group>
     
        {DriverRegistration ? <Drawer.Group>
          <Drawer.Screen
          name="Attract"
          component={AttractPeople}
          options={{
            drawerIcon: ({ color,size }) => (
              <IconMat name="post-add" size={size} color={color} />

            ),
          }}
        />
        
          <Drawer.Screen
          name="View Ridesss"
          component={DriverPostHome}
          options={{
            drawerIcon: ({ color ,size}) => (
              // <Ionicons name="create" size={22} color={color} />
              <MatIcon name="eye" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Driver Prrofile"
          component={DriverProfileNavigation}
          options={{
            drawerIcon: ({ color ,size}) => (
              <IconMat name="post-add" size={size} color={color} />
            ),
          }}
        />
       <Drawer.Screen
        name="Booked Ride info"
        component={DriverBookingHistory}
        options={{
          drawerIcon: ({ color,size }) => (
            <Ionicons name="ios-bookmarks-outline" size={size} color={color} />
          ),
        }}
      />
        </Drawer.Group>  :   <Drawer.Screen
          name="Online Registration"
          component={OnlineRegistrationNav}
          options={{
            drawerIcon: ({ color ,size}) => (
              <Icon name="globe" size={size} color={color} />
            ),
          }}
        />}
    </Drawer.Group>
    :
    <Drawer.Group>
       <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color ,size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
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
        name="Chat"
        component={ChatNav}
        options={{
          drawerIcon: ({ color ,size}) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
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
         name="setting"
         component={SettingNav}
         options={{
           drawerIcon: ({ color ,size}) => (
             <Icon name="user" size={size} color={color} />
           ),
         }}
       />
  
    <Drawer.Screen
         name="Search Ride"
         component={SearchNavigation}
         options={{
           drawerIcon: ({ color,size }) => (
             <Ionicons name="search" size={size} color={color} />

           ),
         }}
        //  options={{
        //   title: 'Product',
        //   drawerIcon: ({ focused, size }) => (
        //     <Image
        //       source={require('../../../assets/')}
        //       style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}
        //     />)
        // }}
        



       />

  <Drawer.Screen
       name="Booked Ride"
       component={BookedRide}
       options={{
         drawerIcon: ({ color ,size}) => (
           <Ionicons name="ios-bookmarks-outline" size={size} color={color} />
         ),
       }}
     />


   </Drawer.Group>
    

 
    
    }
      </Drawer.Navigator>

   

  );
}