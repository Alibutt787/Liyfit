import React,{useState} from 'react'
import { StyleSheet, TextInput,Text, View,Dimensions,ScrollView,SafeAreaView } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { Button} from 'react-native-elements';

const {width, height} =Dimensions.get('window')

const CreatePostForm = ({navigation}) => {
  console.log(width,'pakista',height)
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [MobileNumber, setMobilrNumber] = useState('');
  function sig() {
   // alert(Password);
  }
  const [time, setTime] = useState('');
  return (
    <SafeAreaView >


<ScrollView>
<View style={styles.container}> 
 
 

  <View style={{flexDirection:'row',backgroundColor:"white"}}>
        <Button
                icon={{
                  name: 'arrow-left',
                  type: 'font-awesome',
                  size: 20,
                  color: 'black'}}
                iconLeft
                iconContainerStyle={{ color:'black',  }}
                buttonStyle={{
                backgroundColor: 'white',
                marginTop:12,
                width:70,
                height:55, 
               }}
                containerStyle={{
             
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                onPress={() => navigation.goBack()} 
              />
             

<Text style={{padding:15,marginLeft:'0%',marginTop:9,fontSize:22,color:'black'}}>Create Post</Text>
</View>

    <View  style={styles.loginbox}>
    <Text style={{marginTop:5,paddingLeft:5 }}>Initial Point<Text style={{color:"red"}}> *</Text> </Text>
    <TextInput
              style={styles.inputStyle}
              placeholder="Sarmad"
              // value={Name}
              // onChangeText={(val) => setName(val, 'displayName')}
            /> 
            
    <Text style={{marginTop:5,paddingLeft:5 }}>Final Point<Text style={{color:"red"}}> *</Text> </Text>
 
 <TextInput
           style={styles.inputStyle}
           placeholder="Ejaz"
          //  value={Name}
          //  onChangeText={(val) => setName(val, 'displayName')}
         />
          <Text style={{marginTop:5,paddingLeft:5 }}>Date<Text style={{color:"red"}}> *</Text> </Text>
 
 <TextInput
           style={styles.inputStyle}
           placeholder="Date"
          //  value={Name}
          //  onChangeText={(val) => setName(val, 'displayName')}
         />
           <Text style={{marginTop:5,paddingLeft:5 }}>Ride Start Time<Text style={{color:"red"}}> *</Text> </Text>
 
 <TextInput
           style={styles.inputStyle}
           placeholder="time"
          //  value={Name}
          //  onChangeText={(val) => setName(val, 'displayName')}
         />
          
  {/* <DatePicker
      options={{
        backgroundColor: '#090C08',
        textHeaderColor: '#FFA25B',
        textDefaultColor: '#F6E7C1',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor: '#D6C7A1',
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      current="2020-07-13"
      selected="2020-07-23"
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
    />


<DatePicker style={{height:60}}
      mode="time"
      minuteInterval={3}
      onTimeChange={selectedTime => setTime(selectedTime)}
    /> */}
       <Text style={{marginTop:5,paddingLeft:5 }}>Description<Text style={{color:"red"}}> *</Text> </Text>
 <TextInput
           style={styles.inputStyle}
           numberOfLines={8}
          //  value={Name}
          //  onChangeText={(val) => setName(val, 'displayName')}
         /> 
   
           <View style={styles.styleLoginBtn}>
           
          <Button
         
           title="Save"
             buttonStyle={{
         backgroundColor: '#F88533',
       
        }}
          onPress={() =>{  navigation.navigate('PostHome')}}
          /> 
        </View>
            </View>                         
          </View>
</ScrollView>
</SafeAreaView>

  )
}

export default CreatePostForm;
const styles = StyleSheet.create({
    container: {
      position:'relative',
      padding:0, margin:0,
      marginTop: 0,
      height:height,
      width:width,
      backgroundColor: '#C4C4C4',
    
    },
    loginbox:{marginTop:20, backgroundColor:'#C4C4C4',paddingLeft:25,paddingRight:25,paddingTop:15,paddingBottom:6},
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
      marginTop:20
      
    },
   
  });






