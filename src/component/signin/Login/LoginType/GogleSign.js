import React, {useState, useEffect} from 'react';
import {View } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,} from '@react-native-google-signin/google-signin';
export const GogleSign = ({navigation}) => {
  
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
    webClientId: '854119119098-k3hvs9gf47e4ugnbc9cmrmce3v2mb3fv.apps.googleusercontent.com',
     // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  GoogleSignin.configure();
  async  function _signIn (){
    try {
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }); // <-- Add this
     const idToken = await GoogleSignin.signIn();
     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('Goggle',googleCredential);
      console.log('idToken',idToken);
      return auth().signInWithCredential(googleCredential);
   
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        alert('Error',error);
        console.log(error);
        // some other error happened
      }
    }
  };
return (
<View>
<GoogleSigninButton
                style={{width: 300, height: 48,marginLeft:30,marginTop:60 ,backgroundColor:'black',borderColor:'black',borderWidth:2}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={() =>{_signIn ()}} />
</View>
)
};
