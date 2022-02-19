import React,{useState} from 'react'
import { StyleSheet, TextInput,Button,Text, View,Dimensions,ScrollView,SafeAreaView } from 'react-native'


const {width, height} =Dimensions.get('window')

const Signin = ({navigation}) => {
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
<View style={{backgroundColor:"#F88533",height:height/3, width:width}}>
      <Text style={{textAlign:'center',fontSize:30, color:'white', fontWeight:'700',marginTop:20}}>LIYFIT</Text>
    </View>
    <View  style={styles.loginbox}>
   <View style={{marginBottom:20}}>
    <Text style={{textAlign:'center',fontSize:17, color:'black', fontWeight:'bold'}}> SIGN Up</Text>

    <Text style={{marginTop:5,paddingLeft:5 }}>Name<Text style={{color:"red"}}> *</Text> </Text>
 
    <TextInput
              style={styles.inputStyle}
              placeholder="Aqib"
              value={Name}
              onChangeText={(val) => setName(val, 'displayName')}
            /> 
        <Text style={{marginTop:5,paddingLeft:5 }}>Email<Text style={{color:"red"}}> *</Text> </Text>
           
            <TextInput
              style={styles.inputStyle}
              placeholder="Afaq78@gmail.com"
              value={Email}
              onChangeText={(val) => setEmail(val, 'email')}
            />
             
            <Text style={{marginTop:5,paddingLeft:5 }}>Password<Text style={{color:"red"}}> *</Text> </Text>
  

            <TextInput
              style={styles.inputStyle}
              placeholder=" "
              value={Password}
              onChangeText={(val) => setPassword(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />     
               <Text style={{paddingLeft:5,fontSize:10}}>*Must be at least 8 Characters</Text>
              <Text style={{marginTop:5,paddingLeft:5 }}>Connfirm Password<Text style={{color:"red"}}> *</Text> </Text>
  

  <TextInput
    style={styles.inputStyle}
    placeholder=" "
    value={Password}
    onChangeText={(val) => setPassword(val, 'password')}
    maxLength={15}
    secureTextEntry={true}
  />   

            <Text style={{marginTop:5,paddingLeft:5 }}>Mobile No.<Text style={{color:"red"}}> *</Text> </Text>

                       <TextInput 
   style={styles.inputStyle}
   keyboardType='numeric'
   placeholder="03314113737"
   value={MobileNumber}
   onChangeText={(val) => setMobilrNumber(val, 'password')}
   maxLength={10}  //setting limit of input
/>
    </View>
           <View style={styles.styleLoginBtn}>
          <Button
           color="#F88533"
           title="Sign Up"
          onPress={() =>{  navigation.navigate('GetStarted')}}
          />
        </View>
        <Text style={{textAlign:'center', paddingLeft:10,marginTop:10}}> 
                       Already have an Account? 
              <Text style={{textDecorationLine:'underline',color:'#4484FF',fontWeight:'bold'}} onPress={() => navigation.navigate('Login')}>
                     Log in</Text> 
            </Text> 
      
        
            </View>                         
          </View>
</ScrollView>
</SafeAreaView>

  )
}

export default Signin
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height+70,
      width:width,
      backgroundColor: 'white',
    
    },
    loginbox:{position:'absolute',top:55,left:0,right:0,margin:20, backgroundColor:'#C4C4C4',borderRadius:25,paddingLeft:25,paddingRight:25,paddingTop:15,paddingBottom:6},
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
      
    },
   
  });






