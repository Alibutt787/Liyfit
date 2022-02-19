import React,{useState} from 'react'
import { StyleSheet, Image,TextInput,Button,Text, View,Dimensions,ScrollView } from 'react-native'

const {width, height} =Dimensions.get('window')
const Number = ({navigation}) => {
  const [Number, setNumber] = useState('');
  function sig() {
       // alert(Password);
    }

  return (
<ScrollView>
<View style={styles.container}>  
<View style={{backgroundColor:"#F88533",height:height/2+120, width:width}}>
     
      <Text style={{marginLeft:120,marginRight:120,fontSize:40, color:'black',backgroundColor:'white', fontWeight:'700',marginTop:height/6}}>LIYFIT</Text>
    
    </View>
    <Image  style = {styles._UberX_1}
          source={require('../assets/1_4rfSXmMBn4wO-VtmpFXV9g.png')}/>                   
        
     
  
        <TextInput 
style={{  backgroundColor:'white',fontWeight:"bold",borderRadius:20,paddingLeft:20,marginTop:20,marginLeft:20,marginRight:20,fontSize:15,  borderBottomColor: '#C4C4C4',borderBottomWidth: 3,}}

keyboardType = 'numeric'
  placeholder='+92 Enter the Mobile Number'
autoFocus={true}
  onChangeText = {(text)=> setNumber(Number)}

  maxLength={11} 
/>
   <Text 
   
style={{ paddingLeft:40,fontSize:9}}

   >you'll receive otp to verify your number</Text> 
  
<View style={styles.styleLoginBtn}>
          <Button 
           color="#F88533"
           title="Next"
          onPress={() =>{  console.log('number button');}}
          />
        </View>
         </View>
</ScrollView>
  )
}

export default Number;
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height,
      width:width,
      backgroundColor: 'white',
    
    },

    _UberX_1: {
		position: "absolute",
		width: width/2*2+20,
		height: width/2+50,
		borderRadius: 0,
		opacity: 1,
		left: 20,
		right: 0,
		top: height/3,
		bottom: "auto",
		transform: [
			{translateX: -20},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	}, styleLoginBtn: {
        position:'absolute',
        bottom:30,
        right:15,
          width:65,
        borderRadius:5,
         borderWidth: 2, //button background/border color
       
         color:'red',
        
       },
 

   
  });


