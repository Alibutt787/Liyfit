import React,{useState} from 'react'
import { StyleSheet, TextInput,Button,Text, View,Dimensions,ScrollView } from 'react-native'


const {width, height} =Dimensions.get('window')

const Login = ({navigation}) => {
  console.log(width,'pakista',height)
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  function sig() {
   // alert(Password);
  }

  return (
<ScrollView>
<View style={styles.container}>  
<View style={{backgroundColor:"#F88533",height:height/3, width:width}}>
      <Text style={{textAlign:'center',fontSize:40, color:'white', fontWeight:'700',marginTop:25}}>LIYFIT</Text>
    </View>
    <View  style={styles.loginbox}>
   <View style={{marginBottom:30}}>
    <Text style={{textAlign:'center',fontSize:20, color:'black', fontWeight:'bold'}}>LOG IN</Text>
          
        <Text style={{paddingLeft:5 }}>Email<Text style={{color:"red"}}> *</Text> </Text>
  
            <TextInput
              style={styles.inputStyle}
              placeholder="AqibAli@gmail.com"
              value={Email}
              onChangeText={(val) => setEmail(val, 'email')}
            />
            <Text style={{marginTop:15,paddingLeft:5 }}>Password<Text style={{color:"red"}}> *</Text> </Text>
   

            <TextInput
              style={styles.inputStyle}
              placeholder=" "
              value={Password}
              onChangeText={(val) => setPassword(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />   
    </View>
           <View style={styles.styleLoginBtn}>
          <Button
           color="#F88533"
           title="Sign In"
          onPress={() =>{  navigation.navigate('GetStarted')}}
          />
        </View>
        <Text style={{textAlign:'left',fontSize:10,marginTop:2,marginBottom:50,textDecorationLine: 'underline',paddingLeft:15,color:'blue'}} 
            onPress={() =>{console.log("Forget Password")}}>Forget Password</Text>
          
          <Text>
              if u don't have account then 
                </Text> 
                <View style={styles.styleLoginBtn}>
          <Button
           color="#F88533"
           title="Create An Account"
          onPress={() =>{  navigation.navigate('Signup')}}
          />
        </View>
            </View>                         
          </View>
</ScrollView>
  )
}

export default Login
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height,
      width:width,
      backgroundColor: 'white',
    
    },
    loginbox:{position:'absolute',top:80,left:0,right:0,margin:20, backgroundColor:'#C4C4C4',borderRadius:25,paddingLeft:25,paddingRight:25,paddingTop:25,paddingBottom:20},
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
      borderWidth: 2, //button background/border color
      overflow: "hidden",
      color:'red',
      marginBottom: 10,
    },
   
  });


