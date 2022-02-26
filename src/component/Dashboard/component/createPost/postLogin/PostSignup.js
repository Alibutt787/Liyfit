import React,{useState} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView,SafeAreaView } from 'react-native'
import { Button} from 'react-native-elements';
import {Formik} from 'formik';
import {signUpValidationSchema} from './Schema'

const {width, height} =Dimensions.get('window')

const PostSignup = ({navigation}) => {
  console.log(width,'pakista',height)
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [MobileNumber, setMobilrNumber] = useState('');
  function sig() {
   // alert(Password);
  }

  return (
    <SafeAreaView >


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
                marginTop:12,
                width:70,
                height:55, 
               }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={()=>{navigation.openDrawer()}}
              />
<Text style={{padding:18,marginLeft:'0%',marginTop:10,fontSize:25,color:'white'}}>Become Captain</Text>
</View>
    <View  style={styles.loginbox}>
   <View style={{marginBottom:20}}>
    <Text style={{textAlign:'center',fontSize:17, color:'black', fontWeight:'bold',paddingTop:10}}> SIGN Up</Text>
</View>
        <Formik
   validationSchema={signUpValidationSchema}
   initialValues={{fullName:'', phoneNumber:'', email:'',password:'', confirmPassword:'' }}
   onSubmit={values => {console.log(values), navigation.navigate('PostSignin')}}
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
       <TextInput style={{backgroundColor:'red',padding:50 ,paddingLeft:8}}
         name="fullName"
         autoFocus={true}
         placeholder="full Name"
         style={styles.textInput}
         onChangeText={handleChange('fullName')}
         onBlur={handleBlur('fullName')}
         value={values.fullName}
         keyboardType="default"
       />
       {errors.fullName &&
         <Text style={{ fontSize: 10, color: 'red' ,paddingLeft:8 }}>{errors.fullName}</Text>
       }
       <TextInput
         name="phoneNumber"
         placeholder="phoneNumber"
         style={styles.textInput}
         onChangeText={handleChange('phoneNumber')}
         onBlur={handleBlur('phoneNumber')}
         value={values.phoneNumber}
         keyboardType="numeric"
       />
       {errors.phoneNumber &&
         <Text style={{ fontSize: 10, color: 'red' ,paddingLeft:8 }}>{errors.phoneNumber}</Text>
       }
   
     <TextInput
         name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' ,paddingLeft:8 }}>{errors.email}</Text>
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
         <Text style={{ fontSize: 10, color: 'red' ,paddingLeft:8,}}>{errors.password}</Text>
       }

<TextInput  style={{ fontSize: 0, color: 'red' }}
         name="confirmPassword"
         placeholder="confirmPassword"
         style={styles.textInput}
         onChangeText={handleChange('confirmPassword')}
         onBlur={handleBlur('confirmPassword')}
         value={values.confirmPassword}
         secureTextEntry
       />
       {errors.confirmPassword &&
         <Text style={{ fontSize: 10, color: 'red',  paddingLeft:8, }}>{errors.confirmPassword}</Text>
       }
       <Text></Text>
       <Button 
        onPress={handleSubmit}
       // onPress={onSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}
 </Formik>
        <Text style={{textAlign:'center', paddingLeft:10,marginTop:20}}> 
                       Already have an Account? 
              <Text style={{textDecorationLine:'underline',color:'#1065e9',fontWeight:'bold'}} onPress={() => navigation.navigate('PostSignin')}>
                     Log in</Text> 
            </Text> 
            </View>                         
          </View>
</ScrollView>
</SafeAreaView>

  )
}

export default PostSignup
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height+70,
      width:width,
      backgroundColor: 'white',
    
    },
    loginbox:{position:'absolute',top:'10%',left:0,right:0,margin:10, backgroundColor:'#C4C4C4',borderRadius:25,padding:15,paddingBottom:6},
    inputStyle: {
      width: '100%',
      borderRadius:10,
      borderColor:'black',
      color:'white',
      backgroundColor:'white',
      fontSize:14,
      padding:8,
      color:'black'
    },
 
  
    styleLoginBtn: {
      
     borderRadius:5,
      borderWidth: 2, //button background/border color
      overflow: "hidden",
      color:'red',
      marginBottom: 2,
      
    }, textInput: {
      paddingLeft:15,
      height: 50,
      width: '100%',
     marginTop:20,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
   
  });






