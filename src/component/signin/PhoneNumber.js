import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export const PhoneNumber = ({navigation}) => {
    const [number,setnumber]=useState('');
    const [confirm,setConfirm]=useState(null);
    async function signInWithPhoneNumber(phoneNumber) {
      if(number.length===10){
      try {
        // const confirmation = await auth().signInWithPhoneNumber('+92'+phoneNumber);
        setConfirm('confirmation');   
      
      } catch (error) {
        setConfirm(error);
      }}else{alert('Wrong Number')}
    }
    

      return (
        <View>
     
        <Text style={{ marginTop: 10, marginBottom: 30,
          fontSize: 20,
          width: 300,
          borderRadius: 0,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',}}>
                Enter Your Mobile number
              </Text>
      {/* Number Enter Box  */}
      <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                 
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: 300,
                    backgroundColor: 'white',
                    borderBottomColor: '#C4C4C4',
                    borderBottomWidth: 3,
                    paddingLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      padding: 4,
                      fontWeight: 'bold',
                      textAlignVertical: 'center',
                    }}>
                    +92
                  </Text>
                  <TextInput
                    style={{
                      width: 200,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                    keyboardType="numeric"
                    placeholder="Mobile Number"
                    autoFocus={true}
                   
                    onChangeText={(e)=>setnumber(e)}
                    maxLength={10}
                  />
                </View>
              </TouchableOpacity>
      {/* number enter Next button */}
              <Button
                title="Continue"
                disabled={number.length===10 ? false : true}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)',  height:50}}
                containerStyle={{
                  marginTop: 30,
                  flex: 1,
                  width: 310,
                  marginLeft: 25,
              
                }}
                titleStyle={{color: 'white', marginHorizontal: 20}}
             
                onPress={()=> {   navigation.navigate('Confirm', {number: number,confirmation: confirm,
                });}}
                
              />
       <Text style={styles.textstyle}>
                By continuing you may receive an SMS for Verification. Message and
                data rates may apply..
              </Text>
      
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: 300,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    width: 140,
                    borderBottomWidth: 2,
                    borderBottomColor: 'black',
                  }}></Text>
      
                <Text>or</Text>
                <Text
                  style={{
                    width: 140,
                    borderBottomWidth: 2,
                    borderBottomColor: 'black',
                  }}></Text>
              </View>
      
        </View>
      );    
  
};
const styles = StyleSheet.create({
 
    textstyle: {
      marginTop: 30,
      fontSize: 15,
      width: 300,
      borderRadius: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
  