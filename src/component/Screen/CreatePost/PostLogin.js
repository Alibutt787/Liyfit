import React,{useState} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView } from 'react-native'
import { Button} from 'react-native-elements';

const {width, height} =Dimensions.get('window')

const PostLogin = ({navigation}) => {
  console.log(width,'pakista',height)
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  function sig() {
   // alert(Password);
  }

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
    <Text style={{textAlign:'center',fontSize:16, color:'black', fontWeight:'bold',marginBottom:20}}>LOG IN</Text>
          
        <Text style={{paddingLeft:5 }}>Email<Text style={{color:"red"}}> *</Text> </Text>
  
            <TextInput
              style={styles.inputStyle}
              placeholder="AqibAli@gmail.com"
              autoFocus={true}
              // value={Email}
              // onChangeText={(val) => setEmail(val, 'email')}
            />
            <Text style={{marginTop:15,paddingLeft:5 }}>Password<Text style={{color:"red"}}> *</Text> </Text>
   

            <TextInput
              style={styles.inputStyle}
              placeholder=" "
              // value={Password}
              // onChangeText={(val) => setPassword(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />   
    </View>
           <View style={styles.styleLoginBtn}>
          <Button
        
           title="Sign In"
           buttonStyle={{
            backgroundColor: '#F88533',
          
           }}
          onPress={() =>{  navigation.navigate('PostHome')}}
          />
          
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
    loginbox:{position:'absolute',top:'10%',left:0,right:0,margin:20, backgroundColor:'#C4C4C4',borderRadius:25,paddingLeft:25,paddingRight:25,paddingTop:25,paddingBottom:20},
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
    },
   
  });


