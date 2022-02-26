import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView, KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PhoneNumber} from './LoginType/PhoneNumber'
import {GogleSign} from './LoginType/GogleSign'

const LoginNumber = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <ScrollView>
<View>
<Icon name="arrow-back" size={30} color="black" style={{marginLeft:15,marginTop:20,marginBottom:20}}
onPress={() => navigation.navigate('GetStarted', { name: 'Janee' })}    

/>
{/* with phone number and google */}
  <PhoneNumber  navigation={navigation}/>
  <GogleSign   navigation={navigation}/>

</View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginNumber;
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
