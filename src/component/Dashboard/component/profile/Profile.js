import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements'
import Headericon from '../../../CustomComponent/Headericon';
const {width, height} =Dimensions.get('window')

const Profile = ({navigation}) => {

  const [uri, setUri] = useState('');
  const pickPicture = () => {
    ImagePicker.openPicker({
        width: width,
        height: 420,
        cropping: true
      }).then(image => {
        console.log(image ?.path);
        setUri(image ?.path)
      }).catch(e=>console.log('pakistan'))
  };

   
  console.log(width,'pakista',height)
  function sig() {
   // alert(Password);
  }
  
 


  return (
    <SafeAreaView >
<ScrollView>
<View style={styles.container}> 
<Headericon name="bars" des="Profile Setting" navigation={navigation}/>

  <View  style={styles.loginbox}>       
  <Avatar
              size={64}
              rounded
              source={uri ? {uri} :null}
              title="DA"
              containerStyle={{ backgroundColor: 'grey',width:150,height:150,borderRadius:100,alignSelf:'center' }} 
              onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:150,height:150,borderRadius:90}} >
              <Avatar.Accessory size={23}   onPress={pickPicture}/>
            </Avatar>



    
<Input style={{marginTop:30}}
    disabled
    leftIcon={{ type: 'font-awesome', name: 'user' }}
    // inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={{color:'grey',marginTop:30}}
    placeholder={"Dawar"}
    underlineColorAndroid={'transparent'}
    keyboardType="default"
  /> 
      
    <Input
       disabled
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={{color:'red'}}
        placeholder={"Butt"}
        keyboardType="default"
       />
      
       <Input
       disabled
    placeholder={'2000/07/17'}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
    
       <Input
       disabled
    placeholder={'dawar78@gmail.com'}
        leftIcon={{ type: 'Fontisto', name: 'email' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
       <Input
         disabled
    placeholder={'Lahore'}
        leftIcon={{ type: 'font-awesome', name: 'building-o' }}
        leftIconContainerStyle={{color:'red'}}
        keyboardType="default"
       />
      <Button
                  title="Edit"
                  icon={{
                    name: 'edit',
                    type: 'font-awesome',
                    size: 25,
                    color: 'white',
                  }}
                  iconLeft
                  buttonStyle={{height:50,width:'100%' }}
                  containerStyle={{}}
                  titleStyle={{ color: 'white',  }}
                  onPress={() =>{  navigation.navigate('EditProfile')}} 
                 // disabled={!isValid || isSubmitting}
                  // loading={isSubmitting}
        /> 
   
            </View>                         
          </View>
</ScrollView>
</SafeAreaView>

  )
}

export default Profile;
const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#C4C4C4'
      ,width:width,
      height:height
    
    },
    loginbox:{marginTop:10,padding:15,marginBottom:50},
  
    
   
  });




