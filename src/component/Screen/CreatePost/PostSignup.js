import React,{useState} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView,SafeAreaView } from 'react-native'
import { Button} from 'react-native-elements';

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
    <Text style={{textAlign:'center',fontSize:17, color:'black', fontWeight:'bold'}}> SIGN Up</Text>

    <Text style={{marginTop:5,paddingLeft:5 }}>Name<Text style={{color:"red"}}> *</Text> </Text>
 
    <TextInput
              style={styles.inputStyle}
              placeholder="Sarmad"
              // value={Name}
              // onChangeText={(val) => setName(val, 'displayName')}
            /> 
            
    <Text style={{marginTop:5,paddingLeft:5 }}>Father Name<Text style={{color:"red"}}> *</Text> </Text>
 
 <TextInput
           style={styles.inputStyle}
           placeholder="Ejaz"
          //  value={Name}
          //  onChangeText={(val) => setName(val, 'displayName')}
         /> 
         
    <Text style={{marginTop:5,paddingLeft:5 }}>CNIC<Text style={{color:"red", fontSize:8}}> (14 digit without space) *</Text> </Text>
 
 <TextInput
           style={styles.inputStyle}
           placeholder=""
          //  value={Name}
           keyboardType="numeric"
           maxLength={14}
           onChangeText={(val) => setName(val, 'displayName')}
         /> 
        <Text style={{marginTop:5,paddingLeft:5 }}>Email<Text style={{color:"red"}}> *</Text> </Text>
           
            <TextInput
              style={styles.inputStyle}
              placeholder="Afaq78@gmail.com"
              // value={Email}
              // onChangeText={(val) => setEmail(val, 'email')}
            />
             
            <Text style={{marginTop:5,paddingLeft:5 }}>Password<Text style={{color:"red"}}> *</Text> </Text>
  

            <TextInput
              style={styles.inputStyle}
              placeholder=" "
              // value={Password}
              // onChangeText={(val) => setPassword(val, 'password')}
              minLength={8}
              secureTextEntry={true}
            />     
               <Text style={{paddingLeft:5,fontSize:10}}>*Must be at least 8 Characters</Text>
              <Text style={{marginTop:5,paddingLeft:5 }}>Connfirm Password<Text style={{color:"red"}}> *</Text> </Text>
  

  <TextInput
    style={styles.inputStyle}
    placeholder=" "
    // value={Password}
    // onChangeText={(val) => setPassword(val, 'password')}
    maxLength={15}
    secureTextEntry={true}
  />   

            <Text style={{marginTop:5,paddingLeft:5 }}>Mobile No.<Text style={{color:"red"}}> *</Text> </Text>

                       <TextInput 
   style={styles.inputStyle}
   keyboardType='numeric'
   placeholder="03314113737"
  //  value={MobileNumber}
  //  onChangeText={(val) => setMobilrNumber(val, 'password')}
   maxLength={10}  //setting limit of input
/>
    </View>
           <View style={styles.styleLoginBtn}>
      <Button 
        title="Sign In"
        buttonStyle={{
         backgroundColor: '#F88533',
       
        }}
        onPress={() =>{  navigation.navigate('PostSignin')}}
       />
        </View>
        <Text style={{textAlign:'center', paddingLeft:10,marginTop:10}}> 
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
    loginbox:{position:'absolute',top:'10%',left:0,right:0,margin:15, backgroundColor:'#C4C4C4',borderRadius:25,paddingLeft:25,paddingRight:25,paddingTop:15,paddingBottom:6},
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






