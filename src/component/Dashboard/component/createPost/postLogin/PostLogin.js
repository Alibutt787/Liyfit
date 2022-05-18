import React,{useState} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView } from 'react-native'
import { Button} from 'react-native-elements';
import {Formik} from 'formik';
import {loginValidationSchema} from './Schema'

const {width, height} =Dimensions.get('window')

const PostLogin = ({navigation}) => {
 
  
  const onSubmit = () => {
    setTimeout(() => {
      navigation.navigate('PostHome');
    }, 3000);
  };

  return (
<ScrollView>
<View style={styles.container}>  
<View style={{flexDirection:'row',backgroundColor:"#1065e9",height:height/3, width:width}}>
        <Button
                icon={{
                  name: 'arrow-left',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white'}}
                iconLeft
                iconContainerStyle={{ color:'black',  }}
                buttonStyle={{
                backgroundColor: '#1065e9',
                marginTop:7,
                width:70,
                height:55, 
               }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={()=>{navigation.navigate('PostSignup')}}
              />
             

<Text style={{padding:18,marginLeft:'10%',fontSize:32,color:'white'}}>Captain</Text>
</View>
{/* Login boc container   */}
    <View  style={styles.loginbox}>
   <View style={{marginBottom:30}}>

     
    <Text style={{textAlign:'center',fontSize:16, color:'black', fontWeight:'bold',marginBottom:30,paddingTop:20}}>LOG IN</Text>
          
    <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ email: '', password: '' }}
   onSubmit={values => alert(values)}
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
       <TextInput
         name="email"
         autoFocus={true}
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       <TextInput
         name="password"
         placeholder="Password"
         style={styles.textInput}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
       {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       <Text></Text>
       <Button style={{}}
        // onPress={handleSubmit}
         onPress={() =>{  navigation.navigate('PostHome')}} 
       // onPress={onSubmit}
     //   disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        title="LOGIN"
        // disabled={!isValid}
       />
     </>
   )}
 </Formik>


           
    </View>
        
        <Text style={{textAlign:'left',fontSize:10,marginTop:2,marginBottom:50,textDecorationLine: 'underline',paddingLeft:15,color:'blue'}} 
            onPress={() =>{alert('forget Password')}}>Forget Password</Text>
          
         
            </View>                         
          </View>
</ScrollView>
  )
}

export default PostLogin
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height,
      width:width,
      backgroundColor: 'white',
    
    },
    loginbox:{position:'absolute',top:'10%',left:0,right:0,margin:10, backgroundColor:'#C4C4C4',borderRadius:25,padding:20,paddingBottom:20},
    inputStyle: {
      width: '100%',
      borderRadius:10,
      borderColor:'black',
      color:'white',
      backgroundColor:'white',
      fontSize:15,
      padding:8,
      color:'black'
    },
 
  
    styleLoginBtn: {
      
     borderRadius:5,
      borderWidth: 2, 
      overflow: "hidden",
      color:'red',
      marginBottom: 10,
    },textInput: {
      height: 50,
      width: '100%',
     marginBottom:20,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
   
  });


