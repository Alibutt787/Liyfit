import { StyleSheet,PermissionsAndroid,BackHandler } from 'react-native'
import React from 'react'

const UseGetstarted = () => {
    async function requestPhonePermission() {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    
          } else {BackHandler.exitApp();}
        } catch (err) {
          console.warn(err)
        }
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            
            } else {
              alert("Location permission denied");
              BackHandler.exitApp();
            }
          } catch (err) {
            console.warn(err)
          }
      } 
    
    
    return  [  requestPhonePermission   ]
}

export default UseGetstarted

const styles = StyleSheet.create({})