/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
  import React, {useEffect,useState} from 'react';
  import {StatusBar, PermissionsAndroid,Button,View, Platform,Text} from 'react-native';
  import SplashScreen from 'react-native-splash-screen'
import {SignNavigation} from './src/component/signin/signinNavigation/SignNavigation';
import auth from '@react-native-firebase/auth'; 
import { DrawerNavigation } from './src/component/Dashboard/Drawer/DrawerNavigation';
import firestore from '@react-native-firebase/firestore';
import { useDispatch} from 'react-redux';
import {userr,term} from './src/component/Redux/UserReducer'
const App= () => {

  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(user) {
    setUser(user);
    dispatch(userr(JSON.stringify(user)));
    if (initializing) setInitializing(false);
  }
  const dispatch = useDispatch();
    useEffect(() => {
      SplashScreen.hide();
    }, [])

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    
    }, []);
  
    if (initializing) return null;
   
    if(!user){return <SignNavigation/>}
    
    if(user) {
  //     firestore()
  //     .collection('Users')
  //     .doc(user.phoneNumber)
  //     .set({
  //      Name:'',
  //       id:user.uid,
  //       ProfilePhoto:'',
  //     })
  //     .then(() => {
  //       console.log('User added!');
  //     });
      
  
      return( <DrawerNavigation/>);
    }


    // async function getCurrentUser() {
    //   let key = undefined
    //   if (key) {
    //     key = key
    //   } else {
    //     const snapshot = await auth()
    //       .database()
    //       .ref('PhoneNumber')
    //       .once('value', phoneNumber)
    //     if (snapshot.val() !== null) {
    //       key = snapshot.val()[phoneNumber]
    //       if (key === undefined) return
    //     }
    //   }
    //   const userSnapshot = await database()
    //     .ref('Users')
    //     .child(key)
    //     .once('value')
    //   const _user = userSnapshot.val()
    //   if (_user) {
    //     this.name = _user.name
    //     this.avatarSource = _user.avatarSource
    //     this.avatarRef = _user.avatarRef
    //     this.phoneNumber = _user.phoneNumber
    //     this.key = key
    //   }
    // }
  
  };
  
  export default App;
  