import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,ScrollView,SafeAreaView,TouchableHighlight, TouchableOpacity } from 'react-native'
import {Input,Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar } from 'react-native-elements'
import SubHeadericon from '../../../../CustomComponent/SubHeadericon';
const {width, height} =Dimensions.get('window')

const Profile = ({navigation}) => {

  const [uri, setUri] = useState('');
  const pickPicture = () => {
    ImagePicker.openPicker({
      cropperStatusBarColor: 'black',
      showCropFrame: true,
      showCropGuidelines: true,
      width:800,height:800,
        cropping: true
      }).then(image => {
        setUri(image ?.path)
      }).catch(e=>alert(e))
  };

   
  function sig() {
   // alert(Password);
  }
  return (
    <SafeAreaView >

<View style={styles.container}> 
<SubHeadericon name="arrow-left" des="Profile Setting" navigation={navigation}/>

  <View  style={styles.loginbox}>       
  <Avatar
              size={64}
              rounded
              source={uri ? {uri} :require('../../../../../assets/ic_launcher.png')}
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'white',width:150,height:150,borderRadius:100
              ,alignSelf:'center',resizeMode:'contain' }} 
              onPress={()=>{navigation.navigate('ViewProfilePhotoScreen', {uri:{uri}})}}
            avatarStyle={{width:150,height:150,borderRadius:200,resizeMode:'contain'}} >
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




