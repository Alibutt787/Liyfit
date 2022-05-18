import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Confim from '../../confirmCode/Confirmation'
import auth from '@react-native-firebase/auth';
export const LoginNumber = ({navigation}) => {
  //mobile number state
    const [number,setnumber]=useState('');
//confirm code object state with number
    const [confirm,setConfirm]=useState(null);

    const [isLoading, setLoading] = useState(false);
    //sign in with number function

    async function signInWithPhoneNumber(phoneNumber) {
      setLoading(true)
      try {
         const confirmation = await auth().signInWithPhoneNumber('+92'+phoneNumber);
         setConfirm(confirmation);

      } catch (error) {
        setConfirm(error); } }
     if(!confirm){
      return (
        
        <View  style={{height:400}}>
      <Icon
        name="arrow-back"
        size={30}
        color="black"
        style={{marginLeft: 20, marginTop: 25}}
        onPress={() => navigation.goBack()}
      />
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
      {/* number enter continue button */}
              <Button
                title="Continue"
                disabled={number.length===10 ? false : true}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)',  height:50}}
                containerStyle={{
                  marginTop: 30,
                  flex: 1,
                  width: 310,
                  marginLeft: 25,}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
                onPress={()=> {signInWithPhoneNumber(number) }}  />
       <Text style={styles.textstyle}>
                By continuing you may receive an SMS for Verification. Message and
                data rates may apply..
              </Text>

              {/* line after text  */}
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
      );    }
    else  if(!!isLoading){
        return <View style={{height:200}}><ActivityIndicator/></View>
      }
      else if(confirm){ 
        setLoading(false)
        // navigation.navigate('confirm')
        return(
          <Confim  confirmationToken={confirm} number={number}/>
                );
      
      }
     
  
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
  