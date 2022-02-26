/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
  import React, {useEffect} from 'react';
  import {StatusBar, PermissionsAndroid,Button,View, Platform,Text} from 'react-native';
  import SplashScreen from 'react-native-splash-screen'
import {SignNavigation} from './src/component/signin/signinNavigation/SignNavigation';
  const App= () => {
    useEffect(() => {
      SplashScreen.hide();
    }, [])
    const androidPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          // {
          //   title: "Liyfit App Location Permission",
          //   message:
          //     "Liyfit needs access to your location " +
          //     "so you can take awesome rides.",
          //   buttonNeutral: "Ask Me Later",
          //   buttonNegative: "Cancel",
          //   buttonPositive: "OK"
          // }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  
    useEffect(() => {
      
      if (Platform.OS === 'android') {
        androidPermission();
      } else {
        // IOS  
        console.log("plate Form is OS");
      }
    }, [])
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
  <SignNavigation/>
      </>
    );
  };
  
  export default App;
  