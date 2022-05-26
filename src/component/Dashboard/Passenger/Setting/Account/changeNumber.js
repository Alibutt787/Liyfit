import { StyleSheet, Text, View,TextInput,Keyboard } from 'react-native';
import React,{useState} from 'react';
import {Button} from 'react-native-elements';
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
import { Formik } from 'formik';
import * as yup from 'yup'
import Loading from '../../../../CustomComponent/Loading';
import Avoidkeyboard from '../../../../CustomComponent/Avoidkeyboard';
const Account = ({navigation}) => {
  const NameValidationSchema = yup.object().shape({
    PHONENUMBER: yup
    .string()
    //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
    .matches( /^[0-9]\d*$/, 'Special character are not allowed ')
    .min(10, ({ min }) => `Mobile Number Must be ${min} characters`)
    .max(10, ({ max }) => `Mobile Number Must be  ${max} characters`)
    .required('Mobile number is Required')
    .typeError('u must specify a number')
     
  })
  const [number,setnumber]=useState('');
  const [loading,setloading]=useState(false);
console.log(number);
  return (
      <View>
        <SubHeadericon name="arrow-left" des="Change Number " navigation={navigation}/>

       <View style={{justifyContent:'center',alignItems:'center' , marginTop:50}}>
         
<Text style={{alignSelf:'flex-start',paddingLeft:30}}>Current Number +92331-4113737</Text>
      <Formik
   validationSchema={NameValidationSchema}
   initialValues={{ PHONENUMBER:''}}
   onSubmit={values =>{Keyboard.dismiss(),setloading(true),setnumber(92+values.PHONENUMBER)}}
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

<View
                  style={{
                    
                    flexDirection: 'row',
                    width: 300,
                    marginTop:35,
                    backgroundColor: 'white',
                    borderBottomColor: '#C4C4C4',
               
               
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
                    placeholder="New Number"
                    autoFocus={true}
                    onBlur={handleBlur('PHONENUMBER')}
                    onChangeText={handleChange('PHONENUMBER')}
                   value={values.PHONENUMBER}
                    maxLength={10}
                  />
                </View>  
              {errors.PHONENUMBER &&
         <Text style={{ fontSize: 10, color: 'red',alignSelf:'flex-start',marginBottom:20,paddingLeft:30 }}>{errors.PHONENUMBER}</Text>
       }
<Button
                title="Change my number"
                buttonStyle={{ marginTop:50, backgroundColor: 'green'
                ,height:55 }}
                containerStyle={{
                    
                //   width: 200,
                //   marginHorizontal: 50,
                //   marginVertical: 10,
                }}
                titleStyle={{ color: 'white', textAlign:'center' }}
                // onPress={() =>{  navigation.goBack()}} 
                onPress={handleSubmit}
               disabled={!isValid || isSubmitting}
                // loading={isSubmitting}
      />

     
     </>)}</Formik>


       
  

    
</View>
{loading? <Loading/>:<></>}
</View>
  )
}

export default Account

const styles = StyleSheet.create({

})