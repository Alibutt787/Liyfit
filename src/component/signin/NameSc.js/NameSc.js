import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup'
import { Formik } from 'formik'

const NameSc = ({navigation}) => {
    const NameValidationSchema = yup.object().shape({
        Firstname: yup
        .string()
        //   .email(/^[a-zA-Z][a-zA-Z\\s]+$/,"Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid first Name')
        .min(3, ({ min }) => `First name less ${min} characters`)
      //  .max(8, ({ max }) => `First name greater than ${max} characters`)
        .required('first name is Required'),
          Lastname: yup
        .string()
          //   .email("Please enter valid email")
        .matches(/^[a-zA-Z][a-zA-Z\\s]+$/, 'Enter a valid Last Name')
        .min(3, ({ min }) => `Last name less ${min} characters`)
        // .max(8, ({ max }) => `Last name greater than ${max} characters`)
        .required('Last name is Required'),
      })
  return (
    <View>
      <Icon
        name="arrow-back"
        size={30}
        color="black"
        style={{marginLeft: 20, marginTop: 25}}
        onPress={() => navigation.goBack()}
      /> 
      {/* text of confirmation code sent */}
      <View style={{paddingLeft: 30, paddingRight: 30, marginTop: 35}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 0,
          }}>
         What's your name ?
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginBottom: 15,
            marginTop: 0,
          }}>
        Lets us know how to properly address you 
        </Text>

<Formik
   validationSchema={NameValidationSchema}
   initialValues={{ Firstname: '', Lastname: '' }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
     <>
       <TextInput
         name="Firstname"
         autoFocus={true}
         placeholder="first Name"
         style={{backgroundColor:'white',paddingLeft:15,marginTop:15}}
         onChangeText={handleChange('Firstname')}
         onBlur={handleBlur('Firstname')}
         value={values.Firstname}
        keyboardType="default"
       />
       {errors.Firstname &&
         <Text style={{ fontSize: 10, color: 'red',marginBottom:20 }}>{errors.Firstname}</Text>
       }
       <TextInput
         name="Lastname"
         placeholder="Last name"
         style={{backgroundColor:'white',paddingLeft:15,marginTop:15}}
         onChangeText={handleChange('Lastname')}
         onBlur={handleBlur('Lastname')}
         value={values.Lastname}
         keyboardType="default"
       
       />
       {errors.Lastname &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Lastname}</Text>
       }
       
         <Button
              title="Continue"
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)', height: 50,width:150,alignSelf:'flex-end'}}
              containerStyle={{
                marginTop: 30,
                marginBottom: 20,
              }}
              disabled={!isValid}
              titleStyle={{color: 'white'}}
            //  onPress={handleSubmit}
               onPress={() => { navigation.navigate('TermConditions')}}
            />
     </>
   )}
 </Formik>
      </View>
    </View>
  );
};

export default NameSc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  styleLoginBtn: {
    marginTop: 20,
    alignSelf: 'flex-end',
    borderRadius: 5,
    height: 40,
    width: 90,
    borderWidth: 2, //button background/border color
    overflow: 'hidden',
    color: 'red',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginBottom: 60,
    fontWeight: 'bold',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
