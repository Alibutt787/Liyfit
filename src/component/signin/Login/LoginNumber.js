import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,Keyboard
} from 'react-native';
import {Button} from 'react-native-elements';
import {width,height} from '../../CustomComponent/Dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import Confim from '../confirmCode/Confirmation'
import auth from '@react-native-firebase/auth';
import Loading from '../../CustomComponent/Loading';
import DeviceInfo from 'react-native-device-info';
import {NameValidationSchema} from './Schema'
import { Formik } from 'formik'
export  const LoginNumber = ({navigation}) => {

  //mobile number state
  const [value,setvalue]=useState('');

   
   
//confirm code object state with number
    const [confirm,setConfirm]=useState(null);

    const [isLoading, setLoading] = useState(false);
    //sign in with number function

  //   DeviceInfo.getPhoneNumber().then((phoneNumber) => {
  //     // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
  // setvalue(phoneNumber?.slice(1,11))
  //   })  
     const [number,setnumber]=useState(value);
     async function signInWithPhoneNumber(phoneNumber) {
      Keyboard.dismiss();
      navigation.navigate('confirm');
      // setLoading(true);
      // try {
      //    const confirmation = await auth().signInWithPhoneNumber('+92'+phoneNumber);
      //     setConfirm(confirmation);
      //    setLoading(false);
      // } catch (error) {
      //   console.log(error);
      // alert('check your Internet'); 
      // setLoading(false);           }
      } 

        //component render
if(!confirm){
        return (
          <View style={{height:height,width:width}}>
        <View  style={{height:'55%'}}>
        
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

      <Formik
   validationSchema={NameValidationSchema}
   initialValues={{ PHONENUMBER:''}}
   onSubmit={values =>{setnumber(values.PHONENUMBER),signInWithPhoneNumber(number)}}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting,
     values,
     errors,
     isValid,
   }) => (
     <>

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
                    // autoFocus={true}
                    onBlur={handleBlur('PHONENUMBER')}
                    onChangeText={handleChange('PHONENUMBER')}
                   value={values.PHONENUMBER}
                    maxLength={10}
                  />
         
                </View>
              </TouchableOpacity>
              {errors.PHONENUMBER &&
         <Text style={{ fontSize: 10, color: 'red',marginBottom:20,paddingLeft:30 }}>{errors.PHONENUMBER}</Text>
       }
<Button
                title="Continue"
                // disabled={number.length===10 ? false : true}
                disabled={!isValid}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)',  height:50}}
                containerStyle={{
                  marginTop: 30,
                  flex: 1,
                  width: 310,
                 alignSelf:'center'}}
                titleStyle={{color: 'white', marginHorizontal: 20}}
                onPress={handleSubmit}
                // onPress={()=> {signInWithPhoneNumber(number) }} 
                 />
     
     </>)}</Formik>
      
      {/* number enter continue button */}
     
              
               
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
              {isLoading?<Loading />:<></>}
        </View>
        </View>   );}
      // );   
    //  }
   else if(confirm){ 
  //       setLoading(false)
  //       // navigation.navigate('confirm')
        return(
          <Confim  confirmationToken={confirm} number={number} navigation={navigation}/>
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
  