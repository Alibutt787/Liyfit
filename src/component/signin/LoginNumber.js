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
import Icon from 'react-native-vector-icons/Ionicons';
import {PhoneNumber} from './PhoneNumber'
import {GogleSign} from './GogleSign'
const {width, height} = Dimensions.get('window');
const LoginNumber = ({navigation}) => {
 
  return (
    <ScrollView>
<View>
<Icon name="arrow-back" size={30} color="black" style={{marginLeft:15,marginTop:20,marginBottom:20}}
onPress={() => navigation.navigate('GetStarted', { name: 'Janee' })}    

/>
  <PhoneNumber  navigation={navigation}/>
  <GogleSign   navigation={navigation}/>
</View>
    </ScrollView>
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
