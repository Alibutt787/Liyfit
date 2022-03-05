import React,{useState} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Drawer/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Welcome/Home';
import ProfileNavigation from '../component/profile/ProfileNavigation';
import SearchNavigation from '../component/search/SearchNavigation';
import BookingHistory from '../component/BookingHistory/BookingHistory';
import BookedRide from '../BookedRide/BookedRide';
import AttractPeople from '../component/AttractPeople/AttractPeople';
import DriverPostHome from '../ViewDriverPost/DriverPostHome';
import OnlineRegistrationNav from '../component/online registration/OnlinegistrationNav';

const Drawer = createDrawerNavigator();

export default function StackDrawer() {

  
  const hy = useState(false);

  return (
  
<Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} hy={hy}/>}
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
      { hy[0] ?
       (<Drawer.Screen
      name="Attract"
      component={AttractPeople}
      options={{
        drawerIcon: ({color}) => (
          <IconMat name="post-add" size={22} color={color} />
         
        ),
      }}
    />    ):<Drawer.Screen
    name="Profile"
    component={ProfileNavigation}
    options={{
      drawerIcon: ({color}) => (
        <Icon name="user" size={22} color={color} />
 
      ),
    }}
  />}
      { hy[0] ?
       (<Drawer.Screen
      name="View Rides"
      component={DriverPostHome}
      options={{
        drawerIcon: ({color}) => (
          // <Ionicons name="create" size={22} color={color} />
          <MatIcon name="eye" size={22} color={color} />
        ),
      }}
    />    ):<></>}
       { hy[0] ?
       (<Drawer.Screen
      name="Online Registration"
      component={OnlineRegistrationNav}
      options={{
        drawerIcon: ({color}) => (
          <Icon name="globe" size={22} color={color} />
        ),
      }}
    />    ):   <Drawer.Screen
    name="Search Ride"
    component={SearchNavigation}
    options={{
      drawerIcon: ({color}) => (
        <Ionicons name="search" size={22} color={color} />
 
      ),
    }}
  />}
      
       {hy[0]? <Drawer.Screen
       name="Booked Ride"
       component={BookedRide}
       options={{
         drawerIcon: ({color}) => (
           <MatIcon name="seat-recline-extra" size={22} color={color} />
         ),
       }}
     />:<Drawer.Screen
      name="Ride history"
      component={BookingHistory}
      options={{
        drawerIcon: ({color}) => (
          <Icon name="clock" size={22} color={color} />
        ),
      }}
    /> }
         
     
      </Drawer.Navigator>

  );
}